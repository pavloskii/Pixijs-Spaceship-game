const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin-advanced");

module.exports = {
  context: path.resolve(__dirname, "src"),
  entry: ["./scripts/app.js", "./styles/app.css"],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "app.bundle.js",
    publicPath: ""
  },
  devServer: {
    contentBase: path.resolve(__dirname, "src")
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: { presets: ["es2015", "es2016"] }
          }
        ]
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        loader: ExtractTextPlugin.extract({
          loader: "css-loader?importLoaders=1"
        })
      }
    ]
  },
  plugins: [
    new CopyWebpackPlugin([
      {
        from: "./assets/**/**",
        flatten: true
      },
      {
        from: "index.html"
      }
    ]),
    new ExtractTextPlugin({
      filename: "app.bundle.css",
      allChunks: true
    })
  ]
};
