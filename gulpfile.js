// Requires
var gulp = require('gulp');

// Include plugins
var less = require('gulp-less');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var minify = require('gulp-minify-css');
var autoprefixer = require('gulp-autoprefixer');


// tâche CSS
gulp.task('css', function () {
  return gulp.src('./css/styles.less')
    .pipe(less())
    .pipe(autoprefixer())
    .pipe(rename({suffix: '.min'}))
    .pipe(minify())
    .pipe(gulp.dest('./css/'));
});

// Watcher
gulp.task('watch', function() {
  gulp.watch(['./css/*.less'], ['css']);
});

gulp.task('default', ['css']);
