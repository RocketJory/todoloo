const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
    entry: { 
        index: path.resolve(__dirname, "src", "js", "index.js") 
    },
    output: {
        path: path.resolve(__dirname, "dist")
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "src", "index.html")
        })
    ],
    module: {
        rules: [
          {
            // CSS LOADER
            test: /\.css$/i,
            use: ["style-loader", "css-loader"],
          },
          {
            // IMAGE LOADER
            test: /\.(gif|png|jpe?g)$/,
            use: [
              {
                loader: 'file-loader',
                options: {
                  name: '[name].[ext]',
                  outputPath: 'img/',
                }
              }
            ]
          },
          {
            test: /\.s[ac]ss$/i,
            use: [
              // Creates `style` nodes from JS strings
              "style-loader",
              // Translates CSS into CommonJS
              "css-loader",
              // Compiles Sass to CSS
              "sass-loader",
            ],
          }
        ],
    }
}