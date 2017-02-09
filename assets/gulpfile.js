var gulp = require('gulp'); 
var path = require('path');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var concat = require('gulp-concat');

var paths = {
	sass: path.resolve('./sass'),
	css: path.resolve('./css')
};

gulp.task('sass', function() {
return gulp.src( [paths.sass+'/main.scss'] )
   .pipe( sass() )
   .pipe( rename('style.css') )
   .pipe( gulp.dest(paths.css) );
});

gulp.task('sass:watch', function () {
 gulp.watch(paths.sass+'/**/*.scss', ['sass']);
});