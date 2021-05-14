import { BuildOptions } from "esbuild";
import sassPlugin from "esbuild-plugin-sass";

const config: BuildOptions = {
  entryPoints: ["./src/app.jsx"],
  bundle: true,
  minify: true,
  sourcemap: true,
  target: ["chrome58", "firefox57", "safari11"],
  outfile: "public/bundle.js",
  plugins: [sassPlugin()],
  define: {
    "process.env.NODE_ENV": '"production"',
  },
};

export default config;
