var path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
	entry: {
		main: './src/index.js'
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
		new CleanWebpackPlugin(['dist'], {
			root: path.resolve(__dirname, '../'),
		}),
	],
	optimization: {
		// 配置代码分割
		splitChunks: {
			// chunks: 'all',
			// cacheGroups: {
			// 	vendors: false,
			// 	default: false,
			// },

			// -------------------

			// start 默认配置
			// chunks: 'async',
      // minSize: 30000,
      // maxSize: 0,
      // minChunks: 1,
      // maxAsyncRequests: 5,
      // maxInitialRequests: 3,
      // automaticNameDelimiter: '~',
      // name: true,
      // cacheGroups: {
      //   vendors: {
      //     test: /[\\/]node_modules[\\/]/,
      //     priority: -10
      //   },
      //   default: {
      //     minChunks: 2,
      //     priority: -20,
      //     reuseExistingChunk: true
      //   }
      // }

			// --------------------
			// start 同步+异步配置
			chunks: 'all',
      minSize: 30000,
      maxSize: 800000, // 50kb, lodash 1mb
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      automaticNameDelimiter: '~',
      name: true,
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
					filename: "vendors.js",
        },
        // default: false,
        default: {
          priority: -20,
          reuseExistingChunk: true,
          filename: "common.js",
        },
      }
		},
	},
	output: {
		filename: '[name].js',
		// publicPath: "/dist/",
		path: path.resolve(__dirname, '../dist')
	}
};
