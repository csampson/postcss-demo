/**
 * A halfling-sized build script
 * @see {@link https://github.com/gulpjs/gulp}
 */

'use strict';

var gulp    = require('gulp');
var postcss = require('gulp-postcss');

/**
 * Bundle CSS, applying transforms
 */
gulp.task('bundle-css', function() {
  var plugins = [
    require('cssnext')
  ];

  return gulp.src('./swag.css')
    .pipe(postcss(plugins))
    .pipe(gulp.dest('./swag.css'));
});
