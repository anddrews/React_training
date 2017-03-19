const path = require('path');
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
	entry: './src/js/index.jsx',
	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'common.js',
		publicPath: '/dist/'
	},

	devtool: 'inline-source-map',
	devServer: {
		inline: true,
		historyApiFallback: true
	},
	watch: true,

	resolve: {
		extensions: ['', '.js', '.jsx'],
	},
	// externals: {
	// 	// Use external version of React
	// 	"react": "React",
	// 	"react-dom": "ReactDOM"
	// },
	module: {
		loaders: [{
			test: /.jsx?$/,
			loader: 'babel-loader',
			exclude: /node_modules/,
			query: {
				presets: ['es2015', 'react']
			}
		}, {
			test: /\.css$/,
			loaders: [
				'style?sourceMap',
				'css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]'
			]
		}]
	},
	plugins: [
		new CopyWebpackPlugin([{ from: 'src/html'}])
	],
};