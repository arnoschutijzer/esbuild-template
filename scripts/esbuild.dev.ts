import sharedConfig from './esbuild.shared';
import { build } from 'esbuild';
import { start } from 'live-server';

build({
  ...sharedConfig,
  define: {
    'process.env.NODE_ENV': '"development"'
  },
  watch: {
    onRebuild(error, result) {
      if (error) console.error('watch build failed:', error)
      else console.error('watch build succeeded. warnings:', result.warnings)
    }
  }
});

start({
  port: 8080,
  open: true,
  root: 'public',
  file: 'index.html'
});
