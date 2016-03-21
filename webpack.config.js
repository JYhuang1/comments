/**
 * Created by henry on 16/3/21.
 */
var path = require('path');
var webpack = require('webpack');
module.exports = {
    entry: {
        index: './js/index.js'
    },
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
        loader:[{
            test: /images/,
            loader: 'file'
        },{
            test: /icons/,
            loader: 'url'
        },{
            test: /\.scss$/,
            loader: 'style!css!sass'
        },{
            test: /\.css$/,
            loader: 'style-loader!css-loader'
        },{
            test: /\.js$/,
            exclude: /node_nodules/,
            loader: 'babel'
        }]
    }
}