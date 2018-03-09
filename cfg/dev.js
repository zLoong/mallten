'use strict';

let path = require('path');
let webpack = require('webpack');
let baseConfig = require('./base');

const postcssQuery = {
    plugins: (loader) => [
        require('autoprefixer')({
            browsers: ['last 2 versions', 'Android >= 4.0', 'Chrome >= 37', 'iOS>=7']
        }),
        require('postcss-flexbugs-fixes'),
        require('postcss-gradientfixer')
    ]
};
const autoprefixer_loader = {
    loader: 'postcss-loader',
    options: postcssQuery
}

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
            { test: /\.css$/, use: ['style-loader', 'css-loader', autoprefixer_loader] },
            {
                test: /\.scss$/, use: ['style-loader', 'css-loader', autoprefixer_loader, 'sass-loader']
            }
        ]
    }
});

module.exports = config;