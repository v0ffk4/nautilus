var gulp = require('gulp'),
  gutil = require('gulp-util'),
  webserver = require('gulp-server-livereload'),
  postcss = require('gulp-postcss'),
  autoprefixer = require('autoprefixer'),
  cssnano = require('cssnano'),
  precss = require('precss'),
  htmlmin = require('gulp-html-minifier'),
  concat = require('gulp-concat'),

  sourceCSS = 'process/css/',
  devCSS = 'builds/development/css/',
  proCSS = 'builds/production/css/',
  sourceJS = 'process/scripts/',
  devJS = 'builds/development/js/',
  proJS = 'builds/production/js/',
  dev = 'builds/development/',
  pro = 'builds/production/';

gulp.task('html', function() {

  gulp.src(dev + '*.html');

});

gulp.task('htmlHuyak', function() {

  gulp.src(dev + '*.html')
  .pipe(htmlmin({
    collapseWhitespace: true

  }))

  .on('error', gutil.log)
    .pipe(gulp.dest(pro))

});

gulp.task('cssPrep', function() {

  gulp.src(sourceCSS + 'style.css')
  .pipe(postcss([
    precss(),
    autoprefixer()
  ]))

  .on('error', gutil.log)
  .pipe(gulp.dest(devCSS));

});

gulp.task('cssHuyak', function() {

  gulp.src(sourceCSS + 'style.css')
  .pipe(postcss([
    precss(),
    autoprefixer(),
    cssnano()
  ]))

  .on('error', gutil.log)
  .pipe(gulp.dest(proCSS));

});

gulp.task('jsConcat', function(){

  gulp.src(sourceJS + '*.js')
  .pipe(concat('script.js'))
  .pipe(gulp.dest(devJS));

});


gulp.task('watch', function() {

  gulp.watch(sourceCSS + '**/*.css', ['cssPrep']);
  gulp.watch(dev + '**/*.html', ['html']);
  gulp.watch(sourceJS + '*.js', ['jsConcat']);

});

gulp.task('webserver', function() {

  gulp.src(dev)
    .pipe(webserver({
      livereload: true,
      open: true
    }));

});

gulp.task('huyak', ['cssHuyak', 'htmlHuyak']);
gulp.task('default', ['html', 'cssPrep', 'jsConcat' , 'webserver','watch']);

//gulp.task('log', function(){
//  gutil.log('workflows rule');
//});