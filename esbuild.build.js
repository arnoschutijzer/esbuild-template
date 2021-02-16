const sharedConfig = require('./esbuild.shared');

require('esbuild').buildSync(sharedConfig)