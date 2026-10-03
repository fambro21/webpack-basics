import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  mode: "development",
  entry: {
    index: "./src/index.js",
  },
  experiments: {
    html: true,
  },
  devtool: "inline-source-map",
  devServer: {
    static: "./dist",
  },
  output: {
    filename: "[name].bundle.js",
    htmlFilename: "[name].html",
    path: path.resolve(__dirname, "dist"),
  },
};
