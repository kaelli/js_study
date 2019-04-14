var webpack=require('webpack');
module.exports = {
  entry: "./runoob1.js",
  output: {
  path: __dirname,
  filename: "bundle.js"
  },
  module: {
  loaders: [
  { test: /\.css$/, loader: "style-loader!css-loader" },
  {
    test: /\.js$/, // babel 转换为兼容性的 js
    exclude: /node_modules/,
    loader: 'babel-loader',
    query: {presets: ['latest']}
}
  ]
  },
  plugins:[
    new webpack.BannerPlugin('菜鸟教程 webpack 实例')
    ]
};