const gulp = require('gulp');
const gulpSync = require('gulp-sync')(gulp);
const requireDir = require('require-dir');
const packageJson = require('./package.json');

let defaultTasks = ['build', 'watch', 'browser-sync'];


const baseConfig = {
    localhost: 'http://bulb/',
    packageJson: packageJson,
    compressed: true,
    watch: true
};

const wpThemePath = 'www/wp-content/themes/' + packageJson.name;
const paths = {
    basePath: 'www/',
    pluginsWp: 'plugins/**/*.*',
    styleWp: 'src/style.css',
    configWp: 'wp-config.php',
    pagesDest: wpThemePath,
    fontsDest: wpThemePath + '/fonts',
    imagesDest: wpThemePath + '/images',
    stylesDest: wpThemePath + '/css',
    scriptsDest: wpThemePath + '/js',
    themesWp: 'wordpress/wp-content/themes/'
};



const devPaths = {
    pages: ['src/**/*.php', 'src/*.css'],
    scripts: 'src/js/**/*.js',
    styles: 'src/css/**/*.scss',
    images: 'src/images/**/*.*',
    fonts: 'src/fonts/**/*.*',
    mainscript: './src/js/app.js'

};

gulp.paths = Object.assign(devPaths, paths);
gulp.config = baseConfig;

// Gulp tasks
requireDir('tasks');

gulp.task('default', gulpSync.sync(defaultTasks));

gulp.task('build', gulpSync.sync([
    'clean', 'styles', 'scripts', 'pages', 'images', 'fonts'
]));

gulp.task('watch', () => {
    gulp.watch(gulp.paths.styles, ['styles']);
    gulp.watch(gulp.paths.scripts, ['scripts']);
    gulp.watch(gulp.paths.pages, ['pages']);
    gulp.watch(gulp.paths.images, ['images']);
    gulp.watch(gulp.paths.fonts, ['fonts']);
});

