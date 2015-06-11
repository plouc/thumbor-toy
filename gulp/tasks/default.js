/*
 * This file is part of thumbor-toy project.
 *
 * (c) Raphaël Benitte <thumbor-toy@rbenitte.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
var gulp = require('gulp');

gulp.task('build',     ['js',     'styles',     'fonts']);
gulp.task('build:dev', ['js:dev', 'styles:dev', 'fonts']);

gulp.task('default', ['build']);