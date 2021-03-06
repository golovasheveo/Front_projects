/* 
* This file was generated with webpack-create-config version 1.0.0 
* please run the following command to install dependencies
* npm install --save-dev webpack style-loader css-loader
* or with yarn
* yarn add webpack style-loader css-loader
*/
const path = require('path');
module.exports = {
    entry: './/src/index.js',
    output: {
        filename: 'webpack-config.js',
        path: path.resolve(__dirname, ''),
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: ['style-loader','css-loader',],
        },],
    },
};