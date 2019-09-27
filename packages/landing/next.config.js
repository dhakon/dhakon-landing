const withPlugins = require("next-compose-plugins");
const withTM = require("next-transpile-modules");
const withOptimizedImages = require("next-optimized-images");
const withFonts = require("next-fonts");
const withCSS = require("@zeit/next-css");
const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/
})
const webpack = require("webpack");
require("dotenv").config();

module.exports = withPlugins(
  [
    [
      withTM,
      {
        transpileModules: ["reusecore", "common"]
      }
    ],
    [
      withOptimizedImages,
      {
        mozjpeg: {
          quality: 90
        },
        webp: {
          preset: "default",
          quality: 90
        }
      }
    ],
    withFonts,
    withCSS,
    withMDX({
      pageExtensions: ['js', 'jsx', 'md', 'mdx']
    })
  ],
  {
    distDir: "../../dist/functions/next"
  },
  {
    webpack: config => {
      const env = Object.keys(process.env).reduce((acc, curr) => {
        acc[`process.env.${curr}`] = JSON.stringify(process.env[curr]);
        return acc;
      }, {});

      config.plugins.push(new webpack.DefinePlugin(env));

      return config;
    }
  }
);
