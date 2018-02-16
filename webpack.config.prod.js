const baseConfig = require('./webpack.config.base.js');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const webPackStrip = require('strip-loader');


process.env.NODE_ENV = 'prod';



/** LOADERS*/
//remove all console
var stripLoader = {
    test:[/\.js$/, /|.es6$/],
    exclude: /(node_modules|bower_components)/,
    loader:webPackStrip.loader('console.log')
};


//Uglify
baseConfig.plugins.push(new UglifyJsPlugin({
    uglifyOptions: {
        compress: {
            drop_console: true
        }
    }
}));



module.exports = baseConfig;



