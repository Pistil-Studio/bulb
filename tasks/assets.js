const gulp = require('gulp');
const browserSync = require('browser-sync');

gulp.task('fonts', function() {
    return gulp.src(gulp.paths.fonts)
        .pipe(gulp.dest(gulp.paths.fontsDest))
        .pipe(browserSync.reload({stream: true}));
});

gulp.task('images', function() {
    return gulp.src(gulp.paths.images)
        .pipe(gulp.dest(gulp.paths.imagesDest))
        .pipe(browserSync.reload({stream: true}));
});

gulp.task('pages', function() {
    return gulp.src(gulp.paths.pages)
        .pipe(gulp.dest(gulp.paths.pagesDest))
        .pipe(browserSync.reload({stream: true}));
});
