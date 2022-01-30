const { createProxyMiddleware } = require('http-proxy-middleware');

const port = process.env.API_PORT;

module.exports = function (app) {
    app.use('/auth/**', 
        createProxyMiddleware({ 
            target: `http://localhost:${port}`
        })
    );

    app.use('/spotify/**', 
        createProxyMiddleware({ 
            target: `http://localhost:${port}`
        })
    );
};
