'use strict';

let path = require('path');
let publicPath = '/';

module.exports.baseConfig = {
    output: {
        path: path.join(__dirname, '/../dist'),
        filename: '[name].bundle.js',
        chunkFilename: '[name].chunk.js',
        publicPath: publicPath,
    },
    resolve: {
        extensions: [' ', '.js', '.jsx', '.css', '.sass']
    }
};

const postcssQuery = {
    plugins: (loader) => [
        require('autoprefixer')({
            browsers: ['last 2 versions', 'Android >= 4.0', 'Chrome >= 37', 'iOS>=7']
        }),
        require('postcss-flexbugs-fixes'),
        require('postcss-gradientfixer')
    ]
};

module.exports.commonObj = {
    autoprefixer_loader: {
        loader: 'postcss-loader',
        options: postcssQuery
    }
}


