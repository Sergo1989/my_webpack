const path = require('path');

module.exports = {
    entry: ['./app.js'],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'my-first-webpack.bundle.js',
        publicPath: 'dist/'
    },

    watch: true,
    watchOptions: {
        aggregateTimeout:100
    },

    module: {
        loaders: [],
        rules: [
            //babel
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: [require('@babel/plugin-proposal-object-rest-spread')]
                    }
                }
            },
        ]
    },

    plugins: [

    ]
};