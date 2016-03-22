/**
 * Created by henry on 16/3/21.
 */
var path = require('path');
var webpack = require('webpack');
module.exports = {
    entry: ['./js/index.js'],
    plugins:[
        //去掉空格
        new webpack.optimize.UglifyJsPlugin()
    ],
    output: {
        path: path.join(__dirname,'dist'),
        publicPath: '/dist/',//bundle.js的输出路径
        filename: 'bundle.js'
    },
    module:{
        loaders:[{
            test: /images/,
            exclude: /node_modules/,
            loader: 'file'
        },{
            test: /\.js$/,
            exclude: /node_modules/,
            include: __dirname,
            loader: 'babel'
        },{
            test: /icons/,
            exclude: /node_modules/,
            loader: 'url'
        },{
            test: /\.scss$/,
            exclude: /node_modules/,
            loader: 'style!css!sass'
        },{
            test: /\.css$/,
            exclude: /node_modules/,
            loader: 'style-loader!css-loader'
        }]
    }
}