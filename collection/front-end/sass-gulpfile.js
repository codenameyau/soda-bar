'use strict';

// Gulpfile with Sass watch/build.
var gulp = require('gulp');
var sass = require('gulp-sass');
var rimraf = require('rimraf');

// Customizable paths.
var PUBLIC_DIR = 'public/';
var BUILD_DIR = 'build/';
var PUBLIC_ASSETS_DIR = PUBLIC_DIR + 'assets/';
var BUILD_ASSETS_DIR = BUILD_DIR + 'assets/';
var SASS_FILES = PUBLIC_ASSETS_DIR + 'scss/**/*.scss';


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
  gulp.src(SASS_FILES)
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest(BUILD_ASSETS_DIR + 'css'));
});

gulp.task('default', ['build']);
