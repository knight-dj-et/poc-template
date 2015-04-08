var gulp = require('gulp'),
	config = require('../config'),
	browserSync = require('browser-sync');

gulp.task('watch', ['browsersync'], function () {
	gulp.watch(config.less.watch, ['less', browserSync.reload]);
	gulp.watch([config.scripts.watch], ['browserify', browserSync.reload]);
});
