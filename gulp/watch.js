'use strict';

var gulp = require('gulp');
var browserSync = require('browser-sync');

function isOnlyChange(event) {
  return event.type === 'changed';
}

module.exports = function(options) {
  gulp.task('watch', ['scripts:watch', 'inject'], function () {

    gulp.watch([options.src + '/*.html', 'bower.json'], ['inject']);

    gulp.watch([
      options.src + '/{app,components}/**/*.css',
      options.src + '/{app,components}/**/*.less'
    ], function(event) {
      if(isOnlyChange(event)) {
        gulp.start('styles');
      } else {
        gulp.start('inject');
      }
    });


    gulp.watch(options.src + '/{app,components}/**/*.html', function(event) {
      browserSync.reload(event.path);
    });
  });
};