const baseConfig = require('./webpack.config.base.js');
const webPackStrip = require('strip-loader');


process.env.NODE_ENV = 'development';

console.log('DEV WEBPACK IS LOADED');

//add htmlForHotReloading
baseConfig.entry.push('./htmlRequires.js');

//watch
baseConfig.watch = true;
baseConfig.watchOptions = {
    aggregateTimeout:100
};

//dev Tool
baseConfig.devtool = "inline-source-map";


//devServer
baseConfig.devServer = {
    inline:true,
    // contentBase: './'
    // port: '3001',
};

//this code need to put in prod webpack config

/** LOADERS */
//for hot reloading
var rawLoader = {
    test:/\.html$/,
    exclude: /(node_modules|bower_components)/,
    loader: "raw-loader" // loaders: ['raw-loader'] is also perfectly acceptable.
};


baseConfig.module.rules.push(rawLoader);

module.exports = baseConfig;

