const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = (app) => {
  app.use(
    '/pothole',
    createProxyMiddleware({
      target: process.env.REACT_APP_API_PROXY_BASE_URL,
      changeOrigin: true,
    }),
  );
};
