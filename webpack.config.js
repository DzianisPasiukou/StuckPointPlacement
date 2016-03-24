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
    ],
    module: {
        loaders: [
            {test: /\.ts$/, loader: 'ts'}
        ]
    }
};