import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";

import { fileURLToPath } from "url";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  entry: "./main.ts",
  output: {
    filename: "bundle.[hash].js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/, // Dopasowanie plików SCSS
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader", // Przetwarza CSS do CommonJS
          "sass-loader", // Kompiluje SCSS do CSS
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg|ico|mp3|webp)$/i,
        loader: "file-loader",
        include: path.resolve(__dirname, "src", "assets"),
        options: {
          name: "[name].[ext]",
          outputPath: "assets",
        },
      },
      {
        test: /\.(ttf|otf)$/,
        type: "asset/resource", // Użyj asset/resource dla plików fontów
        generator: {
          filename: "assets/[name].[hash].[ext]", // Ścieżka docelowa dla fontów
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "bundle.[hash].css", // Nazwa pliku CSS z hashem
    }),
  ],
  resolve: {
    extensions: [".ts", ".js"],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    compress: true,
    port: 3000,
    hot: true,
  },
};
