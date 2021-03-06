module.exports = {
	entry: './public/js/redux.js',
  	output: {
    	filename: './public/js/bundle.js'
  	},
	devServer: {
		inline: true,
		port: 3333
	},
	module: {
		loaders: [
		{
			test: /\.js$/,
			exclude: /node_modules/,
			loader: 'babel',
			query: {
				presets: ['es2015', 'react']
			}
		}
		]
	}
}