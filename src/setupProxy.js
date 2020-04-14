const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: "https://s-yh.cn:8888",
            changeOrigin: true,
            ws: false,
            // pathRewrite: {
            //     '^/api': '/api'
            // }
        })
    );
};