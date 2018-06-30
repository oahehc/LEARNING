'use strict'

const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: {
        main: path.join(__dirname, 'src/main.ts')
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    output: {
        filename: '[name].js',
        libraryTarget: 'commonjs',
        path: path.join(__dirname, 'dist')
    },
    module: {
        loaders: [{
            test: /\.ts$/,
            loader: 'ts-loader'
            // loader: 'ts-loader?configFileNmae=jsconfig.json'
        }]
    },
}