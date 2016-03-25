'use strict';

var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: {
        app: __dirname + '/app/src/app.ts'
    },
    output: {
        filename: 'bundle.js',
        path: __dirname + '/app'
    },
    devtool: 'source-map',
    resolve: {
        extensions: ['', '.webpack.js', '.web.js', '.ts', '.js']
    },
    plugins: [
        //new webpack.optimize.UglifyJsPlugin()
        new ExtractTextPlugin("[name].css")
    ],
    module: {
        loaders: [{
                test: /\.ts$/,
                loader: 'ts'
            },
            // Extract css files
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader")
            },
            // Optionally extract less files
            // or any other compile-to-css language
            {
                test: /\.less$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader!less-loader")
            }
            // You could also use other loaders the same way. I. e. the autoprefixer-loader
        ]
    }
};