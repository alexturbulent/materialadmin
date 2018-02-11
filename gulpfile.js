var gulp = require('gulp');
var concat = require('gulp-concat');
var cleancss = require('gulp-clean-css');
var htmlmin = require('gulp-htmlmin');
var watch = require('gulp-watch');
var browserSync = require('browser-sync');

// local files
var scripts = require('./scripts');
var style = require('./style');

gulp.task('libs-js', function(){
	gulp.src(scripts)
	.pipe(concat('libs.js'))
	.pipe(gulp.dest('./ready/js'));
});

gulp.task('js', function(){
	gulp.src('src/**/*.js')
	.pipe(concat('scripts.js'))
	.pipe(gulp.dest('./ready/js'));
});

gulp.task('html', function(){
	gulp.src('src/**/*.html')
	.pipe(htmlmin({
		collapseWhitespace: true
	}))
	.pipe(gulp.dest('./ready'))
});

gulp.task('libs-css', function(){
	gulp.src(style)
	.pipe(concat('libs.css'))
	.pipe(cleancss())
	.pipe(gulp.dest('./ready/style'));
});

gulp.task('css', function(){
	gulp.src('./src/**/*.css')
	.pipe(concat('handmade.css'))
	.pipe(cleancss())
	.pipe(gulp.dest('./ready/style'));
});

gulp.task('server', function(){
	browserSync.init({
		server: {
			baseDir: 'ready'
		}
	});
});

gulp.task('go', ['js', 'libs-js', 'css', 'libs-css', 'html']);

gulp.task('default',['go'], function(){
	gulp.watch('src/**/*.js', ['js']);
	gulp.watch('src/**/*.html', ['html']);
	gulp.watch('src/**/*.css', ['css']);
})
// gulp.start('default');