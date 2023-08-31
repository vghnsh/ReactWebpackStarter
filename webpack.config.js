const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "public"), // Change this to a different directory
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-react"], // Add this line
          },
        },
      },
    ],
  },
  devServer: {
    static: path.resolve(__dirname, "public"),
    port: 3000, // Change to a different port number
  },
};
