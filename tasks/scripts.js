const gulp = require('gulp');
const sourcemaps = require('gulp-sourcemaps');
const terser = require('gulp-terser-js');
const browserify = require('browserify');
const source  = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');
const browserSync = require('browser-sync');



gulp.task('scripts', function () {

    return browserify(gulp.paths.mainscript, {debug:true})
        .transform('babelify', {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-transform-runtime', '@babel/plugin-proposal-class-properties']
        })
        .bundle()
        .pipe(source('app.min.js'))
        .pipe(buffer())
        .pipe(sourcemaps.init({loadMaps: true}))
        .pipe(terser())
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest(gulp.paths.scriptsDest))
        .pipe(browserSync.reload({stream: true}));

})


gulp.task('scriptsVendors', function() {
    return gulp.src(gulp.paths.scriptsVendors)
        .pipe(gulp.dest(gulp.paths.scriptsDest))
        .pipe(browserSync.reload({stream: true}));
});
