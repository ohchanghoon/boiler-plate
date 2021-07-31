const proxy = require('http-proxy-middleware');
module.exports = function (app) {
  app.use(
    '/api',
    proxy({
      target: 'http://localhost:7000',
      changeOrigin: true,
    })
  );
};
