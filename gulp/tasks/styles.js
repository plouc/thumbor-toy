/*
 * This file is part of thumbor-toy project.
 *
 * (c) Raphaël Benitte <thumbor-toy@rbenitte.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
var gulp    = require('gulp');
var stylus  = require('gulp-stylus');
var cssmin  = require('gulp-cssmin');
var rename  = require('gulp-rename');
var config  = require('../config');
var onError = require('../util/handleErrors');

gulp.task('styles', function () {
    return gulp
        .src('./src/styles/thumbor-toy.styl')
        .pipe(stylus({
            'include css': true
        }))
        .on('error', onError)
        .pipe(cssmin())
        .pipe(gulp.dest(config.dest))
    ;
});

gulp.task('styles:dev', function () {
    return gulp
        .src('./src/styles/thumbor-toy.styl')
        .pipe(stylus({
            'include css': true
        }))
        .on('error', onError)
        .pipe(gulp.dest(config.dest))
    ;
});

gulp.task('watch:styles:dev', function () {
    return gulp.watch('./src/styles/**/*.styl', ['styles:dev']);
});

gulp.task('watch:styles', function () {
    return gulp.watch('./src/styles/**/*.styl', ['styles']);
});