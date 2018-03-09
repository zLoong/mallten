'use strict';

const path = require('path');
const args = require('minimist')(process.argv.slice(2));

let env = args.env ? args.env : 'dev';

process.env.REACT_WEBPACK_ENV = env;


function buildConfig(env) {
    let config = require(path.join(__dirname, 'cfg/' + (env || 'dev')));
    return config;
}

module.exports = buildConfig(env);