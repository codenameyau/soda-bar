/*!
 * gulpfile.js
 * MIT License
 *
 * Description:
 * Generates dist folder for deployment.
 *
 * Add the following comments to your html files:
 *
 *    <!-- build:css assets/css/style.css -->
 *    <!-- add css files -->
 *    <!-- endbuild -->
 *
 *    <!-- build:js assets/js/main.js -->
 *    <!-- add js files -->
 *    <!-- endbuild -->
 *
 * Run: gulp
 */
'use strict';

// Import node packages
var gulp = require('gulp');
var rimraf = require('rimraf');
var uglify = require('gulp-uglify');
var usemin = require('gulp-usemin');
var minifycss = require('gulp-minify-css');

// File paths
var PATHS = {
  images : 'app/assets/img/**',
  index : 'app/index.html',
  favicon : 'app/favicon.ico',
};

// Remove last generated dist folder
gulp.task('clean', function(cb) {
  rimraf('dist/', cb);
});

// Replace build with concat files in index.html
gulp.task('usemin', ['clean'], function() {
  gulp.src(PATHS.index)
    .pipe(usemin({
      css: [minifycss()],
      js: [uglify()],
    }))
    .pipe(gulp.dest('dist/'));
});

// Copy static files (todo: gulp-imagemin)
gulp.task('static', ['clean'], function() {
  gulp.src(PATHS.favicon)
    .pipe(gulp.dest('dist/'));
  gulp.src(PATHS.images)
    .pipe(gulp.dest('dist/assets/img'));
});

// Generate dist folder for production
gulp.task('default', ['clean', 'usemin', 'static']);
