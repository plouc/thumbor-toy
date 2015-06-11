/*
 * This file is part of thumbor-toy project.
 *
 * (c) Raphaël Benitte <thumbor-toy@rbenitte.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
var gulp       = require('gulp');
var watchify   = require('watchify');
var browserify = require('browserify');
var babelify   = require('babelify');
var source     = require('vinyl-source-stream');
var buffer     = require('vinyl-buffer');
var flow       = require('gulp-flowtype');
var uglify     = require('gulp-uglify');
var notify     = require('gulp-notify');
var rename     = require('gulp-rename');
var gutil      = require('gulp-util');
var eslint     = require('gulp-eslint');
var chalk      = require('chalk');
var onError    = require('../util/handleErrors');
var config     = require('../config');

var thumborFileName = 'thumbor-toy.js';

function getBundler(isDev) {
    var bundler = browserify({
        entries:      ['./src/js/App.jsx'],
        extensions:   ['.js', '.jsx'],
        debug:        isDev,
        cache:        {},  // for watchify
        packageCache: {},  // for watchify
        fullPaths:    true // for watchify
    });

    bundler.transform(babelify.configure({
        optional: []
    }));

    return bundler;
}

gulp.task('watch:js', function () {
    var watcher = watchify(getBundler(true));

    return watcher
        .on('error', gutil.log.bind(gutil, 'Browserify Error'))
        .on('update', function () {
            watcher.bundle()
                .pipe(source(thumborFileName))
                .pipe(gulp.dest(config.dest))
                .pipe(buffer())
                .pipe(uglify())
                .pipe(rename({suffix: '.min'}))
                .pipe(gulp.dest(config.dest))
            ;

            gutil.log(chalk.green('Updated JavaScript sources'));
        })
        .bundle() // Create the initial bundle when starting the task
        .pipe(source(thumborFileName))
        .pipe(gulp.dest(config.dest))
        .pipe(buffer())
        .pipe(uglify())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest(config.dest))
    ;
});

gulp.task('watch:js:dev', function () {
    var watcher = watchify(getBundler(true));

    return watcher
        .on('error', gutil.log.bind(gutil, 'Browserify Error'))
        .on('update', function () {
            watcher.bundle()
                .pipe(source(thumborFileName))
                .pipe(buffer())
                .pipe(gulp.dest(config.dest))
            ;

            gutil.log(chalk.green('Updated JavaScript sources [dev]'));
        })
        .bundle() // Create the initial bundle when starting the task
        .pipe(source(thumborFileName))
        .pipe(gulp.dest(config.dest))
    ;
});


gulp.task('lint', function () {
    return gulp.src(['./src/js/**/*.jsx', './src/js/**/*.js'])
        .pipe(eslint({
            useEslintrc: true
        }))
        .pipe(eslint.format())
        .pipe(flow())
    ;
});


gulp.task('js:dev', function () {
    return getBundler(true)
        .bundle()
        .pipe(source(thumborFileName))
        .pipe(gulp.dest(config.dest))
    ;
});


gulp.task('js', ['js:dev'], function () {
    return getBundler(false)
        .bundle()
        .pipe(source(thumborFileName))
        .pipe(buffer())
        .pipe(uglify())
        .pipe(gulp.dest(config.dest))
    ;
});
