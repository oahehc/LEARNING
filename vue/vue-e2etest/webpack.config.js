const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const DEV_MODE = process.env.NODE_ENV === 'development'; // check project stage

module.exports = {
    entry: './src/js/main.js',
    output: {
        path: (DEV_MODE) ? path.resolve(__dirname, './dist') : path.resolve(__dirname, './build'),
        filename: 'build.js?[hash]',
    },
    module: {
        rules: [{
            test: /\.vue$/,
            loader: 'vue-loader',
            options: {
                loaders: {
                    'scss': 'vue-style-loader!css-loader!sass-loader',
                    'sass': 'vue-style-loader!css-loader!sass-loader?indentedSyntax',
                },
            },
        }, {
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
        }, {
            test: /\.html$/,
            use: [{
                // loader: "raw-loader",
                loader: 'html-loader',
                query: {
                    interpolate: 'require',
                },
            }],
        }, {
            test: /\.(scss|css)$/,
            use: [{
                loader: "style-loader", // creates style nodes from JS strings
            }, {
                loader: "css-loader", // translates CSS into CommonJS
                options: {
                    sourceMap: true,
                },
            }, {
                loader: "sass-loader", // compiles Sass to CSS
                options: {
                    sourceMap: true,
                },
            }, {
                loader: 'postcss-loader?sourceMap=inline',
                options: {
                    plugins: () => [require('autoprefixer')],
                },
            }],
        }, {
            test: /\.(eot|svg|ttf|woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
            loader: 'file-loader?name=fonts/[name].[ext]',
            // loader: 'url-loader?limit=50000&name=[path][name].[ext]',
        }, {
            test: /\.(png|jpg|jpeg|gif)$/,
            loader: 'file-loader',
            options: {
                name: 'assets/images/[name].[ext]?[hash]',
            },
        }],
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
        },
    },
    devServer: {
        historyApiFallback: true,
        noInfo: true,
        publicPath: "/",
        contentBase: './dist',
    },
    performance: {
        hints: false,
    },
    plugins: [
        new HtmlWebpackPlugin({ // create index.html and minify
            template: './src/index.html',
            minify: {
                html5: true,
                minifyCSS: true,
                minifyJS: true,
                removeComments: true,
                collapseWhitespace: true,
                conservativeCollapse: true,
            },
        }),
    ],
    devtool: '#source-map', // cheap-module-eval-source-map
};

// adjust for production
if (process.env.NODE_ENV === 'production') {
    module.exports.devtool = '#eval-source-map';
    module.exports.plugins = (module.exports.plugins || []).concat([
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"',
            },
        }),
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true,
            compress: {
                warnings: false,
            },
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: true,
        }),
        new CleanWebpackPlugin(['build'], { // clean dir
            // root: '/',
            verbose: true,
        }),
    ]);
}
