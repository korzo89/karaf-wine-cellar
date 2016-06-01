var webpack = require('webpack');

module.exports = {
    entry: {
        'app': './app/main.ts'
    },
    
    output: {
        filename: 'dist/[name].js'
    },
    
    resolve: {
        extensions: ['', '.js', '.ts'],
    },
    
    module: {
        loaders: [
            { test: /\.ts$/, loader: 'ts' }
        ]
    },
    
    plugins: [
        new webpack.NoErrorsPlugin(),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin()
    ]
}