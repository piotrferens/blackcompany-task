const { resolve } = require("path");

module.exports = {
  entry: "./js/main.js",

  output: {
    filename: "bundle.js",
    path: resolve(__dirname, "dist")
  },

  mode: process.env.NODE_ENV
};
