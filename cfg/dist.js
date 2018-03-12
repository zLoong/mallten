'use strict';

let path = require('path');
let baseConfig = require('./base').baseConfig;
let commonObj = require('./base').commonObj;
const ExtractTextPlugin = require('extract-text-webpack-plugin');


let config = Object.assign({}, baseConfig, {
    entry: {
        post: path.join(__dirname, '../src/routes/PostRoot'),
        feeds: path.join(__dirname, '../src/routes/FeedsRoot')
    },
    cache: true,
    mode: 'production',  
    module: {
        rules: [
            { test: /\.js$/, use: ['babel-loader'] },
            { test: /\.css$/, use: ExtractTextPlugin.extract({ fallback: 'style-loader', use: ['css-loader', commonObj.autoprefixer_loader] }) },
            { test: /\.scss$/, use: ExtractTextPlugin.extract({ fallback: 'style-loader', use: ['css-loader', commonObj.autoprefixer_loader, 'sass-loader'] }) }
        ]
    },
    plugins: [
        new ExtractTextPlugin({
            filename: '[name].css'
        })
    ]
});

module.exports = config;