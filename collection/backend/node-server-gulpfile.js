'use strict';

var gulp = require('gulp')
var nodemon = require('gulp-nodemon');

var PROJECT_DIR = path.resolve(__dirname);
var APP_DIR = path.resolve(PROJECT_DIR, 'app');


gulp.task('debug', function() {
    return nodemon({
      execMap: {
        js: 'node-inspector --web-port=5000 & nodemon --debug'
      },
      ext: 'js',
      ignore: ['node_modules/*'],
      cwd: APP_DIR,
      verbose: true,
      script: 'server.js',

      // Optional. The following two are unused.
      env: { 'NODE_ENV': 'development' },
      args: ['local'],
    });
});
