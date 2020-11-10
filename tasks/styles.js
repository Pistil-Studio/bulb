const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync');
const sourcemaps = require('gulp-sourcemaps');
sass.compiler = require('node-sass');


gulp.task('styles', function() {

    return gulp.src(gulp.paths.styles)
        .pipe(sourcemaps.init())
        .pipe(sass({outputStyle: 'compressed'} ).on('error', sass.logError))
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest(gulp.paths.stylesDest))
        .pipe(browserSync.stream({match: '**/*.css'}));

});
