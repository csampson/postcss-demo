'use strict';

var gulp    = require('gulp');
var postcss = require('gulp-postcss');

gulp.task('bundle-css', function() {
  return gulp.src('./application.css')
    .pipe(postcss([]))
    .pipe(gulp.dest('./application.css'));
});
