const path = require("path");
// const fse = require("fs-extra");

// class RunAfterCompile {
//   apply(compiler) {
//     compiler.hooks.done.tap("Copy images", function () {
//       fse.copySync("./app/assets/images/products/", "./docs");
//     });
//   }
// }

const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./app/app.js",
  mode: "production",
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({ filename: "Style.[chunkhash].css" }),
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./app/index.html",
    }),
    // new RunAfterCompile(),
  ],
  output: {
    filename: "[name].[chunkhash].js",
    chunkFilename: "[name].[chunkhash].js",
    path: path.resolve(__dirname, "docs"),
  },
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.js$/i,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-react",
              [
                "@babel/preset-env",
                {
                  targets: { node: "12" },
                },
              ],
            ],
          },
        },
      },
      {
        test: /\.(png|svg|jpg|gif|jpeg|pdf)$/,
        use: [
          {
            loader: "file-loader",
            options: { name: "[path][name]-[hash:8].[ext]" },
          },
        ],
      },
      {
        test: /\.s[a/c]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ["file-loader"],
      },
      {
        test: /\.json5$/i,
        loader: "json5-loader",
        type: "javascript/auto",
      },
      // {
      //   test: /\.json$/,
      //   loader: "json-loader",
      // },
      // { type: "javascript/auto", test: /\.json$/, use: "file-loader" },
    ],
  },
};
