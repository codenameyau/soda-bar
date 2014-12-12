/*!
 * gulpfile.js
 * MIT License (c) 2014
 *
 * Description:
 * This is a simple gulpfile used to generate minified
 * 'build/' for javascript files in 'src/' directory.
 *
 * Usage:
 * Install node packages: `npm install`
 * Run command to generate build: `gulp`
 */
'use strict';

// Load dependecies
var gulp = require('gulp');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var rimraf = require('rimraf');

// Task: removes 'build' dir
gulp.task('clean', function(cb) {
  rimraf('build/', cb);
});

// Task: uglify js in 'src'
gulp.task('uglify', function() {
  gulp.src('src/*.js')
    .pipe(uglify())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('build'));
});

// Task: Run and generate 'build/'
gulp.task('default', ['clean', 'uglify']);
