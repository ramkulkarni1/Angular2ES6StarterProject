const gulp = require('gulp');
const devServer = require('webpack-dev-server');
const webpack = require('webpack');

const config = require('./webpack.config.js');
const WEB_SERVER_PORT = config.web_server_port;

gulp.task('buildWebpack', () => {
  "use strict";
  const compiler = webpack(config);
  compiler.run((err, stat) => {
    if (err) {
      console.log('Error building application - ', err);
      return;
    }
    const statJson = stat.toJson();
    if (statJson.errors.length > 0) {
      console.log('Error building application - ', statJson.errors);
      return;
    }
    console.log('Application built successfully !');
  });
});

gulp.task('startWebpackServer',
() => {
  'use strict';
  config.entry.bundle.push(`webpack-dev-server/client?http://localhost:${WEB_SERVER_PORT}/`);
  config.entry.bundle.push('webpack/hot/dev-server');
  const compiler = webpack(config);
  const server = new devServer(compiler, config.devServer);
  server.listen(WEB_SERVER_PORT);
});

gulp.task('default', [
  'startWebpackServer',
]);

gulp.task('build', [ 'buildWebpack' ]);
