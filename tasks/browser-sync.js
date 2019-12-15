const gulp = require('gulp');
const browserSync = require('browser-sync');

gulp.task('browser-sync', function() {

    browserSync.create();
    browserSync.init({
        proxy: gulp.config.localhost,
        open: false
    });

});
