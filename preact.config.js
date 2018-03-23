export default function webpackConfig(config) {
  config.module.loaders.push({
    test: /\.worker\.js$/,
    use: {loader: 'workerize-loader'}
  })
}
