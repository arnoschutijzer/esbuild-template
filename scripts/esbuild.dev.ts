import sharedConfig from "./esbuild.shared";
import { build } from "esbuild";
import { start } from "live-server";

const {
  FRONTEND_PORT = 9000,
  PROXY_PORT = 8080,
  ENABLE_PROXY = true,
} = process.env;

build({
  ...sharedConfig,
  define: {
    "process.env.NODE_ENV": '"development"',
  },
  watch: {
    onRebuild(error, result) {
      if (error) console.error("watch build failed:", error);
      else console.error("watch build succeeded. warnings:", result.warnings);
    },
  },
});

start({
  port: FRONTEND_PORT,
  open: true,
  root: "public",
  file: "index.html",
  proxy: ENABLE_PROXY ? [["/api", `http://127.0.0.1:${PROXY_PORT}/api`]] : [],
});
