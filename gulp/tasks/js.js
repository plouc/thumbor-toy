var gulp       = require('gulp');
var browserify = require('browserify');
var reactify   = require('reactify');
var source     = require('vinyl-source-stream');
var notify     = require('gulp-notify');
var onError    = require('../util/handleErrors');
var config     = require('../config');


gulp.task('js', function () {
    browserify(config.src + '/js/App.jsx')
        .transform(reactify)
        .on('error', onError)
        .bundle()
        .on('error', onError)
        .pipe(source('thumbor-toy.js'))
        .pipe(gulp.dest(config.dest))
        .pipe(notify('successfully generated js'))
    ;
});