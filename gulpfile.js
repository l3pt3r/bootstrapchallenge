var gulp = require('gulp');
var browserSync = require('browser-sync').create();

gulp.task('default', function() {
	gulp.watch('./*.html').on('change', browserSync.reload);
	gulp.watch('./*.css').on('change', browserSync.reload);
	gulp.watch('./*.js').on('change', browserSync.reload);

	browserSync.init({
		server: './'
	});
});