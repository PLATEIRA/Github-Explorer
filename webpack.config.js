const path = require('path')
//const HtmlWebpackPlugin = require('html-webpack-plugin')

const isDevelopment = process.env.MODE_ENV !== 'production';

module.exports = {
    mode: isDevelopment ? 'development' : 'production',
    devtool: isDevelopment ? 'eval-source-map': 'source-Map',
    entry: path.resolve(__dirname, 'src', 'index.jsx'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js','.jsx'],
    },
module: {
    rules: [
        {
            test:/\.jsx$/,
            exclude: /node_modiles/,
            use: 'babel-loader',
        },
        {
            test:/\.scss$/,
            exclude: /node_modiles/,
            use: ['style-loader', 'css-loader', 'sass-loader'],
        }
    ],
}
};