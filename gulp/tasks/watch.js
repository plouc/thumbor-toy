var gulp   = require('gulp');
var config = require('../config');

gulp.task('watch:dev', ['watch:js:dev']);

gulp.task('watch', function () {
    gulp.watch(config.src + '/scss/**', ['css']);
    gulp.watch([
        config.src + '/js/**',
        'config.js'
    ], ['js']);
});