var gulp   = require('gulp');
var config = require('../config');

gulp.task('fonts', function() {
    return gulp
        .src(config.npmSrc + '/font-awesome-stylus/fonts/*')
        .pipe(gulp.dest(config.dest + '/fonts'))
    ;
});