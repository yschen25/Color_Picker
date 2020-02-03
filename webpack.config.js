const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        index: ['./app.js']
    },
    output: {
        filename: './dist/bundle.js',
        path: path.resolve('./'),
    },
    plugins: [new HtmlWebpackPlugin({
        template: './main.html',
        filename: 'index.html',
        minify: {
            collapseWhitespace: true,
        },
        hash: true,
        stats: {children: false}
    })],
    module: {
        rules: [
            {
                test: /.js$/,
                exclude: /node_modules/,
                use: {loader: 'babel-loader', options: {presets: ['@babel/preset-env']}}
            },
            {
                test: /.jsx$/,
                exclude: /node_modules/,
                use: {loader: 'babel-loader', options: {presets: ['@babel/preset-react', '@babel/preset-env']}}
            },
            {
                test: /\.(css|scss|sass)$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader',
                        options: {
                            attrs: false
                        }
                    }
                ]
            },

            {
                test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                },
            }
        ]
    }
};