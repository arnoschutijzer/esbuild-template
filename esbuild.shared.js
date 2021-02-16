module.exports = {
  entryPoints: ['app.jsx'],
  bundle: true,
  minify: true,
  sourcemap: true,
  target: ['chrome58', 'firefox57', 'safari11', 'edge16'],
  outfile: 'public/bundle.js',
  define: {
    'process.env.NODE_ENV': '"production"',
  }
}