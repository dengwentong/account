module.exports = {
  apps: [
    {
      name: 'juejue-vite-h5',
      script: 'juejue-vite-h5-server.js'
    },
  ],
  deploy: {
    production: {
      user: 'root',
      host: '127.0.0.1',
      ref: 'origin/master',
      repo: 'git@github.com:dengwentong/account.git',
      path: '/mnt/sdb1/var/www/account/juejue-vite-h5',
      'post-deploy': 'git reset --hard && git checkout master && git pull && npm i --production=false && pm2 startOrReload ecosystem.config.js', // -production=false 下载全量包
      env: {
        NODE_ENV: 'production'
      }
    }
  }
}
