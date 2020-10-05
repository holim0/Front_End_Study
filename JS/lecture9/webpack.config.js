const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: ["babel-polyfill", "./src/js/index.js"],
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "JS/bundle.js",
    },

    devServer: {
        contentBase: "./dist", // 실제로 서버에 보여줄 폴더 지정.
    },

    plugins: [
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "./src/index.html",
        }),
    ],

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                },
            },
        ],
    },
};
