/*!
 * node-inspector-gulpfile.js
 * Visit 'http://localhost:5000?port=5858' to listen to the debugger.
 */
'use strict';

var gulp = require('gulp')
var nodemon = require('gulp-nodemon');

var PROJECT_DIR = path.resolve(__dirname);
var APP_DIR = path.resolve(PROJECT_DIR, 'app');


gulp.task('debug', function() {
  return nodemon({
    execMap: {
      js: 'node-inspector --web-port=5000 & node --debug'
    },
    ext: 'js',
    ignore: ['node_modules/*'],
    cwd: APP_DIR,
    verbose: true,
    script: 'server.js',
    watch: [APP_DIR + '/**/*.js']

    // Optional. The following two are unused.
    // env: { 'NODE_ENV': 'development' },
    // args: ['local'],
  });
});
