const path = require('path');
const HTMLwebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: "./js/index.js",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    devServer: {
        port: 8800
    },

    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
        ]
    },

    plugins: [
        new HTMLwebpackPlugin({
            template: './index.html'
        })
    ],
    node: {
        net: 'empty',
    }
}