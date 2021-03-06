var gulp = require('gulp'),
	concat = require('gulp-concat'),
	less = require('gulp-less'),
	plumber = require('gulp-plumber'),
	config = require('../config.js').less;

gulp.task('less', function () {
	return gulp.src(config.src)
		.pipe(less())
		.pipe(plumber())
		.pipe(concat("styles.css"))
		.pipe(gulp.dest(config.dest))
});
