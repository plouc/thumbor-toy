var gulp   = require('gulp');
var config = require('../config');

gulp.task('watch',     ['watch:js',     'watch:styles']);
gulp.task('watch:dev', ['watch:js:dev', 'watch:styles:dev']);
