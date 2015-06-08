var gulp = require('gulp');

gulp.task('build',     ['js',     'styles',     'fonts']);
gulp.task('build:dev', ['js:dev', 'styles:dev', 'fonts']);

gulp.task('default', ['build']);