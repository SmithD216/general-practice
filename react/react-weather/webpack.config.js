var HTMLWebpackPlugin = require('html-webpack-plugin');
var HTMLWebpackPluginConfig = new
HTMLWebpackPlugin({
    template: __dirname + 'app/js/weather.js',
    filename: 'html/index.html',
    inject: 'body'
});

module.exports = {
    entry: __dirname + 'app/js/weather.js',
    module: {
        loaders:[
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    },
    output:{
        filename: 'transformed.js',
        path: __dirname + '/build'
    },
    plugins:[HTMLWebpackPluginConfig]
};