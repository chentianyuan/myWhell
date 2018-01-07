//使用webpack-middleware只能起到模块打包的更新，浏览器并不会自动刷新
//要使浏览器也自动刷新，需要配合上webpack-hot-middleware
//或者直接使用webpack-dev-server

//const express = require('express');
//const webpack = require('webpack');
//const webpackDevMiddleware = require('webpack-dev-middleware');
//
//const app = express();
//const config = require('./webpack.config.js');
//const compiler = webpack(config);
//
//// Tell express to use the webpack-dev-middleware and use the webpack.config.js
//// configuration file as a base.
//app.use(webpackDevMiddleware(compiler, {
//publicPath: config.output.publicPath
//}));
//
//// Serve the files on port 3000.
//app.listen(3000, function () {
//console.log('Example app listening on port 3000!\n');
//});