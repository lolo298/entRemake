const path = require("path");
module.exports = {
  //define entry file and output
  entry: "./src/index.tsx",
  output: {
    path: path.resolve("dist"),
    filename: "main.js",
  },
  //define babel loader
  module: {
    rules: [
      { test: /\.jsx?$/, loader: "babel-loader", exclude: /node_modules/ },
      { test: /\.css$/i, use: ["style-loader", "css-loader"] },
      { test: /\.tsx$/, loader: "ts-loader", exclude: /node_modules/ },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "public"),
    },
    compress: true,
    port: 9000,
  },
};
