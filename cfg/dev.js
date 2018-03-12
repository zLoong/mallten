'use strict';

let path = require('path');
let baseConfig = require('./base').baseConfig;
let commonObj = require('./base').commonObj;


let config = Object.assign({}, baseConfig, {
    entry: {
        post: path.join(__dirname, '../src/routes/PostRoot'),
        feeds: path.join(__dirname, '../src/routes/FeedsRoot')
    },
    cache: true,
    mode: 'development',
    devServer: {
        contentBase: './',
        port: 8000
    },
    module: {
        rules: [
            { test: /\.js$/, use: ['babel-loader'] },
            { test: /\.css$/, use: ['style-loader', 'css-loader', commonObj.autoprefixer_loader] },
            { test: /\.scss$/, use: ['style-loader', 'css-loader', commonObj.autoprefixer_loader, 'sass-loader'] }
        ]
    }
});

module.exports = config;