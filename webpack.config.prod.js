const Path = require('path');
const Merge = require('webpack-merge');
const common = require('./webpack.config.js');

const output = Path.resolve(__dirname, 'docs/editor');

module.exports = [
	Merge(common[0], {
		devtool: 'none',
		mode: 'production',
		optimization: {minimize: true},
		output: {
			filename: 'bundle.js',
			path: output
		}
	})
];
