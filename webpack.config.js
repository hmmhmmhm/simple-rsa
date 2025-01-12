const TerserPlugin = require('terser-webpack-plugin')
const path = require('path')

module.exports = {
    entry: './dist/index.js',
    output: {
        path: path.resolve(__dirname, 'export'),
        filename: 'rsa-helper.js',
        publicPath: './dist',
        libraryTarget: 'umd',
        libraryExport: 'default'
    },
    mode: 'production',
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin()]
    },
}
