const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common.config.js');

const prodConfig = {
  mode: "production",
	devtool: 'cheap-module-source-map',
};

module.exports = merge(commonConfig, prodConfig); 
