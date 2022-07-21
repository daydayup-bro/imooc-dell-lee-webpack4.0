var path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  mode: "development",
	devtool: 'cheap-module-eval-source-map',
	entry: {
		main: './src/index.js'
	},
	devServer: {
		contentBase: './dist',
		open: true,
		port: 8080,
		hot: true,
		hotOnly: true
	},
  module: {
    rules: [
      {
        test: /\.js$/i, 
        exclude: /node_modules/,
        loader: "babel-loader",
      }
    ],
  },
	plugins: [
		new HtmlWebpackPlugin({
			template: 'src/index.html'
		}), 
		new CleanWebpackPlugin(['dist']),
		new webpack.HotModuleReplacementPlugin()
	],
	optimization: {
		usedExports: true,
	},
	output: {
		filename: '[name].js',
		publicPath: "/dist/",
		path: path.resolve(__dirname, 'dist')
	}
};
