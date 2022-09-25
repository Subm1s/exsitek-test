const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const WriteFilePlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const nodeEnv = process.env.NODE_ENV || "development";
const isProd = nodeEnv === "production";

// const plugins = [
//   new webpack.DefinePlugin({
//     "process.env": {
//       NODE_ENV: JSON.stringify(nodeEnv),
//     },
//   }),
//   new HtmlWebpackPlugin({
//     title: "Typescript Webpack Starter",
//     template: "!!ejs-loader!src/testPage.html",
//   }),
//   new webpack.LoaderOptionsPlugin({
//     options: {
//       tslint: {
//         emitErrors: true,
//         failOnHint: true,
//       },
//     },
//   }),
// ];

var config = {
  devtool: isProd ? "hidden-source-map" : "source-map",
  devtool: 'cheap-module-source-map',
  context: path.resolve("./src"),
  entry: {
    popup: "./popup.ts",
    options: "./options.ts",
    background: "./background.ts",
    content: "./content.ts",
  },
  output: {
    path: path.resolve("./dist"),
    filename: "[name].bundle.js",
  },
  module: {
    rules: [
      {
        enforce: "pre",
        test: /\.tsx?$/,
        exclude: [/\/node_modules\//],
        use: ["awesome-typescript-loader", "source-map-loader"],
      },
      !isProd
        ? {
            test: /\.(js|ts)$/,
            loader: "istanbul-instrumenter-loader",
            exclude: [/\/node_modules\//],
            query: {
              esModules: true,
            },
          }
        : null,
      { test: /\.html$/, loader: "html-loader" },
      { test: /\.css$/, loaders: ["style-loader", "css-loader"] },
    ].filter(Boolean),
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./options.html",
      filename: "options.html",
      chunks: ["options"],
    }),
    new HtmlWebpackPlugin({
      template: "./popup.html",
      filename: "popup.html",
      chunks: ["popup"],
    }),
    new HtmlWebpackPlugin({
      template: "./background.html",
      filename: "background.html",
      chunks: ["background"],
    }),
    new HtmlWebpackPlugin({
      template: "./content.html",
      filename: "content.html",
      chunks: ["content"],
    }),

  ],
  devServer: {
    contentBase: path.join(__dirname, "dist/"),
    compress: true,
    port: 3000,
    hot: true,
  },
};

module.exports = config;
