var gulp    = require('gulp');
var sass    = require('gulp-ruby-sass');
var cssmin  = require('gulp-cssmin');
var rename  = require('gulp-rename');
var concat  = require('gulp-concat');
var config  = require('../config');
var notify  = require('gulp-notify');
var onError = require('../util/handleErrors');

gulp.task('styles', function () {
    gulp.src(config.src + '/scss/**/*.scss')
        .pipe(sass())
        .on('error', onError)
        .pipe(concat('thumbor-toy.css'))
        .pipe(cssmin())
        .on('error', onError)
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest(config.dest))
        .pipe(notify('ok, new css generated'))
    ;
});

gulp.task('watch:styles', function () {
    gulp.watch(config.src + '/scss/**', ['styles']);
});

gulp.task('watch:styles:dev', ['watch:styles']);