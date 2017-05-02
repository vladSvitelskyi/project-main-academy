var gulp = require('gulp'),
	connect = require('gulp-connect'),
	sass = require('gulp-sass'),
	autoprefixer = require('gulp-autoprefixer'),
	minifyCSS = require('gulp-clean-css'),
	uglify = require('gulp-uglify'),
	minify = require('gulp-minify'),
	concat = require('gulp-concat');

	var startFolder = 'src/',
		finishFolder = 'dist/';


gulp.task('connect', function() {
	connect.server({
		root: finishFolder,
		port: process.env.PORT || 8080,			
		livereload: true,
		livereloadPort: 3000,
	    middleware: function (connect) {
	      return [connect().use("/bower_components", connect.static("bower_components"))];
	    }
	});
});

gulp.task('html', ['html-include'], function() {
	gulp.src(startFolder + '**.html')
		.pipe(gulp.dest(finishFolder))
		.pipe(connect.reload());
});
gulp.task('html-include', function() {
	return gulp.src(startFolder + 'modules/**/**/**.html')
		.pipe(gulp.dest(finishFolder + 'views/'));
});

gulp.task('sass', ['bower_styles','images'], function() {
	return gulp.src(startFolder + 'css/scss/style.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(autoprefixer({
			browsers: ['last 20 versions'],
			cascade: false
		}))
		.pipe(concat('style.css'))
		.pipe(minifyCSS({compatibility: 'ie8'}))
		.pipe(gulp.dest(finishFolder + 'css/'))
		.pipe(connect.reload());
});
gulp.task('bower_styles', function() {
	gulp.src([
		// here would be libs css files
		'bower_components/materialize/dist/css/materialize.css'
		])
		.pipe(concat('bower_components.css'))
		.pipe(minifyCSS({compatibility: 'ie8'}))
		.pipe(gulp.dest(finishFolder + 'css/'));
});

 gulp.task('images', function () {
   gulp.src(startFolder + 'images/**/*')
		.pipe(gulp.dest(finishFolder + 'images/'));
});
 gulp.task('fonts', function () {
 	gulp.src(startFolder + 'fonts/**/**/*')
 		.pipe(gulp.dest(finishFolder + 'fonts/'));
 });

gulp.task('js', function() {
	gulp.src([
			startFolder + 'js/**.js',
			startFolder + '**/**/**/**/**.module.js',
			startFolder + '**/**/**/**/**.routing.js',
			startFolder + '**/**/**/**/**.config.js',
			startFolder + '**/**/**/**/**.service.js',
			startFolder + '**/**/**/**/**.controller.js'
		])
		.pipe(concat('app.js'))
		// .pipe(minify())
		// .pipe(uglify())
		.pipe(gulp.dest(finishFolder + 'js/'))
		.pipe(connect.reload());

	gulp.src([
			// libs js files
			'bower_components/jquery/dist/jquery.js',
			'bower_components/angular/angular.js',
			'bower_components/angular-ui-router/release/angular-ui-router.js',
			'bower_components/materialize/dist/js/materialize.js',
			'bower_components/angular-materialize/src/angular-materialize.js'
			])
		.pipe(concat('bower_components.js'))
		// .pipe(minify())
		// .pipe(uglify())
		.pipe(gulp.dest(finishFolder + 'js'));
});

gulp.task('watch', function() {
	gulp.watch(startFolder + 'modules/**/**/**.html', ['html-include']);
	gulp.watch(startFolder + '**.html', ['html']);
	gulp.watch(startFolder + '**/**/**/**/**.js', ['js']);
	gulp.watch(startFolder + 'css/**/**.*', ['sass']);
});

gulp.task('build', ['html', 'sass', 'js'], function() {

});
gulp.task('default', ['connect', 'watch', 'build']);