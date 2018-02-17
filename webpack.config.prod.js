const baseConfig = require('./webpack.config.base.js');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const WebpackStrip = require('strip-loader');

process.env.NODE_ENV = 'prod';

console.log('PROD WEBPACK IS LOADED');

/** LOADERS*/
//remove all console
// var stripLoader = {
//     test:[/\.js$/, /|.es6$/],
//     exclude: /(node_modules|bower_components)/,
//     loader: WebpackStrip.loader('debug', 'console.log')
// };
//
//
// baseConfig.module.loaders.push(stripLoader);

//Uglify
baseConfig.plugins.push(new UglifyJsPlugin({
    uglifyOptions: {
        compress: {
            drop_console: true
        }
    }
}));


module.exports = baseConfig;



