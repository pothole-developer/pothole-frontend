const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    createProxyMiddleware('/pothole/v1/manager/potholes', {
      target: process.env.REACT_APP_API_PROXY_BASE_URL,
      changeOrigin: true,
      secure: false
    }),
  );
};