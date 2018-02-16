const path = require('path');

module.exports = {
    entry: ['./app.js'],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'my-first-webpack.bundle.js',
    },

    watch: true,
    watchOptions: {
        aggregateTimeout:100
    },

    module: {
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