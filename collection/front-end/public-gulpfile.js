'use strict';

// Gulpfile with Sass watch/build.
var gulp = require('gulp');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var htmlmin = require('gulp-htmlmin');
var rimraf = require('rimraf');


// Customizable paths.
var PUBLIC_DIR = 'public/';
var BUILD_DIR = 'build/';
var PUBLIC_ASSETS_DIR = PUBLIC_DIR + 'assets/';
var BUILD_ASSETS_DIR = BUILD_DIR + 'assets/';
var SASS_FILES = PUBLIC_ASSETS_DIR + 'scss/**/*.scss';
var JS_FILES = PUBLIC_ASSETS_DIR + 'js/**/*.js';


gulp.task('clean', function(cb) {
  rimraf(BUILD_DIR, cb);
});

gulp.task('sass', function() {
  return gulp.src(SASS_FILES)
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest(PUBLIC_ASSETS_DIR + 'css'));
});

gulp.task('watch:sass', function() {
  gulp.watch(SASS_FILES, ['sass']);
});

gulp.task('build', function() {
  // Build js files.
  gulp.src(JS_FILES)
    .pipe(uglify())
    .pipe(gulp.dest(BUILD_ASSETS_DIR + 'js'));

  // Build sass files.
  gulp.src(SASS_FILES)
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest(BUILD_ASSETS_DIR + 'css'));

  // Build index.html
  gulp.src(PUBLIC_DIR + 'index.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest(BUILD_DIR));
});

gulp.task('default', ['build']);
