const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const DEV_MODE = process.env.NODE_ENV === 'development'; // check project stage

module.exports = {
    entry: {
        main: './src/js/main.js',
    },
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
                // }, {
                //     loader: "resolve-url-loader",
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
        // root: [path.join(__dirname, 'src')], // 指定在js內import時, 統一從src/開始尋找套件
        // extensions: ['', '.js', '.css', '.scss'], // 允許import時不加附檔名
        extensions: ['.js', '.css', '.scss'], // 允許import時不加附檔名
        alias: { // 自行指定路徑符號
            'vue$': 'vue/dist/vue.esm.js',
            '': path.join(__dirname, 'src'), // 指定在css內import時, 空白統一加上src/ (並需加上resolve-url-loader)
        },
    },
    devServer: {
        historyApiFallback: true,
        noInfo: true,
        publicPath: "/",
        contentBase: './dist',
        // hot: true,
    },
    performance: {
        hints: false,
    },
    plugins: [
        // new webpack.HotModuleReplacementPlugin(),
        new ExtractTextPlugin('[name].bundle.css'), // create css bundle file
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
    devtool: '#eval-source-map', // cheap-module-eval-source-map
};

// adjust for production
if (process.env.NODE_ENV === 'production') {
    module.exports.devtool = '#source-map';
    // http://vue-loader.vuejs.org/en/workflow/production.html
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
