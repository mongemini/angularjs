'use strict';

const fs = require('fs');
const path = require('path');
const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
//const SpritesmithPlugin = require('webpack-spritesmith');

const NODE_ENV = process.env.NODE_ENV || 'development';

const config = {
    devtool:  'inline-source-map',
    context: __dirname + '/frontend/js',
    entry:{
        app : './index',
    },
    output: {
        path: path.join(__dirname, 'public'),
        filename: '[name]-[hash:6].js',
        library: '[name]'
    },

    resolve: {
        modules: ["node_modules", "spritesmith-generated"]
    },

    plugins:[
        new webpack.NoErrorsPlugin(),
        // this consts use in all modules
        new webpack.DefinePlugin({
            NODE_ENV : JSON.stringify(NODE_ENV),
            LANG: '"en"'
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'common'
        }),
            // new webpack.optimize.CommonsChunkPlugin({
        //     name: 'common2',
        //     chunks: ['home', 'about']
        // })
        // new webpack.ProvidePlugin({
        //     pluck: 'lodash/collection/pluck'
        // })
        new HtmlWebpackPlugin({
            filename: 'index.html',
            chunks: ['app', 'common'], //add order
            template: __dirname +'/frontend/index.html'
        }),
        new CleanWebpackPlugin([path.join(__dirname, 'public')]),
        new ExtractTextPlugin("[name]-[hash:6].css"),
        // new SpritesmithPlugin({
        //     src: {
        //         cwd: path.resolve(__dirname, 'shared'),
        //         glob: '*.s.png'
        //     },
        //     target: {
        //         image: path.resolve(__dirname, 'assers/sprite.png'),
        //         css: path.resolve(__dirname, 'public/[name].css')
        //     },
        //     apiOptions: {
        //         cssImageRef: "~sprite.png"
        //     }
        // })
    ],

    module: {
        rules: [
                {test: /\.js$/, loader: 'ng-annotate-loader!babel-loader'},
                {test: /\.html$/, loader: 'raw-loader', exclude: /node_modules/},
                {test: /\.css$/, loader: ExtractTextPlugin.extract({fallback: "style-loader", use:"css-loader!postcss-loader"})},
                {test: /\.less$/, loader: ExtractTextPlugin.extract({fallback: "style-loader", use:"css-loader!postcss-loader!less-loader"})},
                {test: /\.(png|jpg|gif|svg|woff2?|eot|ttf)(\?.*)?$/, loader: 'url-loader',
                  query: { limit: 1000, name: 'assets/[name]-[hash:6].[ext]?'}
                },
    ]}
}

if(process.env.NODE_ENV === 'production'){
    config.plugins.push(new webpack.optimize.UglifyJsPlugin());
    config.devtool = 'source-map'
}

module.exports = config;