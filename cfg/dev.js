'use strict';

let path = require('path');
let webpack = require('webpack');
let baseConfig = require('./base');

let config = Object.assign({}, baseConfig, {
    entry: {
        post: path.join(__dirname, '../src/routes/PostRoot'),
        feeds: path.join(__dirname, '../src/routes/FeedsRoot')
    },
    cache: true,
    mode: 'development',
    module: {
        rules: [
            { test: /\.js$/, use: ['babel-loader'] },
            { test: /\.css$/, use: ['style-loader', 'css-loader'] }
        ]
    }
});

module.exports = config;