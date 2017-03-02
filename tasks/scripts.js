const gulp = require('gulp');
const sourcemaps = require('gulp-sourcemaps');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');
const browserify = require('browserify');
const watchify = require('watchify');
const babel = require('babelify');
const browserSync = require('browser-sync');
const uglify = require('gulp-uglify');
const minify = require('gulp-babel-minify');
const globify = require('require-globify');


gulp.task('scripts', function() {


    var bundler = watchify(browserify(gulp.paths.mainscript, { debug: true })
        .transform(babel, {presets: ['es2015']}));

    function rebundle() {
        bundler.bundle()
            .on('error', function(err) { console.error(err); this.emit('end'); })
            .pipe(source('app.js'))
            .pipe(buffer())
            .pipe(sourcemaps.init({ loadMaps: true }))
            .pipe(uglify({compress: true}))
            .pipe(sourcemaps.write('./'))
            .pipe(gulp.dest(gulp.paths.scriptsDest))
            .pipe(browserSync.reload({stream: true}))
    }

    rebundle();


});