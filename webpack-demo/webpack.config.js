import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  entry: "./src/index.html",
  experiments: {
    html: true,
  },
  output: {
    filename: "[name].bundle.js",
    htmlFilename: "[name].html",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
};
