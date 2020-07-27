const gulp = require('gulp');
const sourcemaps = require('gulp-sourcemaps');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');
const browserify = require('browserify');
const watchify = require('watchify');
const babelify = require('babelify');
const browserSync = require('browser-sync');
const uglify = require('gulp-uglify');
const minify = require('gulp-babel-minify');
const globify = require('require-globify');
const plumber = require('gulp-plumber');



gulp.task('scriptsVendors', function() {
    return gulp.src(gulp.paths.scriptsVendors)
        .pipe(plumber({
            errorHandler: error => {
                console.log(error.message);
                this.emit('end');
            }
        }))
        .pipe(gulp.dest(gulp.paths.scriptsDest))
        .pipe(browserSync.reload({stream: true}));
});



gulp.task('scripts', function() {
    return browserify(gulp.paths.mainscript, { debug: true })
        .transform(babelify, {presets: ['es2015']})
        .bundle()
        .pipe(source('app.js'))
        .pipe(buffer())
        .pipe(sourcemaps.init({ loadMaps: true }))
        .pipe(uglify({compress: true}))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest(gulp.paths.scriptsDest))
        .pipe(browserSync.reload({stream: true}));
});