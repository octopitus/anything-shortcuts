export default function webpackConfig(config, env, helpers) {
	config.module.loaders.push({
		test: /\.worker\.js$/,
		use: { loader: 'workerize-loader' }
	})
}
