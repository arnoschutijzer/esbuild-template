const sharedConfig = require('./esbuild.shared');
const liveServer = require('live-server');

require('esbuild').build({
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

liveServer.start({
  port: 8080,
  open: true,
  root: 'public',
  file: 'index.html'
});
