const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");

module.exports = {
	entry: "./app/app.js",
	mode: "development",
	output: {
		filename: "bundled.js",
		path: path.resolve(__dirname, "app"),
	},
	plugins: [
		new HtmlWebpackPlugin({
			filename: "index.html",
			template: "./app/index.html",
		}),
		new BundleAnalyzerPlugin(),
	],
	devServer: {
		before: (app, server) => {
			server._watch("./app/**/*.html");
		},
		contentBase: path.join(__dirname, "app"),
		hot: true,
		port: 8000,
		//host: "192.168.42.82",
		open: true,
		historyApiFallback: true,
	},
	module: {
		rules: [
			{
				test: /\.css$/i,
				use: ["style-loader", "css-loader"],
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
				test: /\.s[a/c]ss$/i,
				use: ["style-loader", "css-loader", "sass-loader"],
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
				test: /\.(woff|woff2|eot|ttf|otf)$/,
				use: ["file-loader"],
			},
			{
				test: /\.svg$/,
				use: "svg-inline-loader",
			},
			{
				test: /\.json5$/i,
				loader: "json5-loader",
				type: "javascript/auto",
			},
			// {
			// 	test: /\.json$/,
			// 	loader: "json-loader",
			// },
			// { type: "javascript/auto", test: /\.json$/, use: "file-loader" },
		],
	},
};
