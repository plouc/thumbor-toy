var gulp   = require('gulp');
var config = require('../config');

gulp.task('fonts', function() {
    return gulp.src(config.bowerSrc + '/font-awesome/fonts/*')
        .pipe(gulp.dest(config.dest + '/fonts'));
});