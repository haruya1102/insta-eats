// http-proxy-middleware パッケージからcreateProxyMiddleware関数をインポート
const { createProxyMiddleware } = require('http-proxy-middleware');

// プロキシ設定をエクスポートする
module.exports = function(app) {
  // '/hotpepper' パスに対するリクエストをプロキシする
  app.use(
    '/hotpepper',
    createProxyMiddleware({
      target: 'http://webservice.recruit.co.jp', // このURLにプロキシする
      changeOrigin: true, // オリジンをターゲットURLに変更
      pathRewrite: {
        '^/hotpepper': '/hotpepper/gourmet/v1', // パスをリライト
      },
    })
  );
};
