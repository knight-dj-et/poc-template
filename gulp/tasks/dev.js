var gulp = require('gulp'),
    browserifyTask = require('./browserifyTask');


gulp.task('dev', function () {

  browserifyTask({
    development: true,
    src: './app/main.js',
    dest: './build'
  });

});

gulp.task('default',['html','fonts','images','icons','less', 'watch'], function() {});
