'use strict';
let path = require('path');
let publicPath = '/', port = 8000;

module.exports = {
    output: {
        path: path.join(__dirname, '/../dist'),
        filename: '[name].bundle.js',
        chunkFilename: '[name].chunk.js',
        publicPath: publicPath,
    },
    devServer: {
        contentBase: '../dist/',
        hot: true,
        port: port
    },
    resolve: {
        extensions: [' ', '.js', '.jsx', '.css', '.sass']
    }
};