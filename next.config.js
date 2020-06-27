const path = require("path");
const { parsed: localEnv } = require("dotenv").config();
const webpack = require("webpack");

module.exports = {
  webpack: (config) => {
    config.plugins.push(new webpack.EnvironmentPlugin(localEnv));
    config.resolve.modules.push(path.resolve("./"));

    return config;
  },
};
