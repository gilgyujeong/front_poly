const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://54.180.44.73:8080',  // Spring 서버 주소
      changeOrigin: true,
    })
  );
};