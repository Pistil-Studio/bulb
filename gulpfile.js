const gulp = require('gulp');
const requireDir = require('require-dir');
const packageJson = require('./package.json');


// Configuration de base
gulp.config = {
    localhost: 'http://bulb/',
    packageJson: packageJson,
    compressed: true,
    watch: true
};

// les dossier de destination
const destPath = {
    pagesDest: 'www/wp-content/themes/' + packageJson.name,
    fontsDest: 'www/wp-content/themes/' + packageJson.name + '/assets/fonts',
    imagesDest: 'www/wp-content/themes/' + packageJson.name + '/assets/images',
    stylesDest: 'www/wp-content/themes/' + packageJson.name + '/assets/css',
    scriptsDest: 'www/wp-content/themes/' + packageJson.name + '/assets/js',
};

// les dossier correspondant au sources
const srcPaths = {
    pages: ['src/**/*.php'],
    scripts: 'src/js/**/*.js',
    scriptsVendors: 'src/js/vendors/*.js',
    styles: 'src/css/**/*.scss',
    images: 'src/images/**/*.*',
    fonts: 'src/fonts/**/*.*',
    mainscript: './src/js/app.js'
};

gulp.paths = Object.assign(srcPaths, destPath);

// Gulp tasks
requireDir('tasks');



gulp.task('watch', () => {
    gulp.watch(gulp.paths.styles,  gulp.parallel('styles'));
    gulp.watch(gulp.paths.scripts,  gulp.parallel('scripts', 'scriptsVendors'));
    gulp.watch(gulp.paths.pages,  gulp.parallel('pages'));
    gulp.watch(gulp.paths.images,  gulp.parallel('images'));
    gulp.watch(gulp.paths.fonts,  gulp.parallel('fonts'));
});

gulp.task('build', gulp.series([
    'clean', 'styles', 'scripts', 'scriptsVendors', 'pages', 'images', 'fonts'
]));


gulp.task('default', gulp.parallel('build', 'watch', 'browser-sync'));

