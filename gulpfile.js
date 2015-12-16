var gulp = require('gulp'),
		server = require('gulp-server-livereload'),
		sass = require('gulp-sass'),
		autoprefixer = require('gulp-autoprefixer'),
		rename = require('gulp-rename');

//webserver
gulp.task('webserver', function(){
	gulp.src('app')
	.pipe(server({
		livereload:true,
		directoryListing:false,
		defaultFile:'index.html',
		open:true
	}));
});




//project sass - css
gulp.task('styles',function () {
  gulp.src('sass/*.sass')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(rename({suffix: '.min', prefix : '_'}))
		.pipe(autoprefixer({
		browsers: ['last 15 versions'],
		cascade: false
	}))
	.pipe(gulp.dest('app/css'));
});

gulp.task('watch', function() {
	gulp.watch('sass/*.sass', ['styles']);
});

gulp.task('default', ['styles','watch', 'webserver'], function() {

});




