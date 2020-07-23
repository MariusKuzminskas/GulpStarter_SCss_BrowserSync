const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();

// compile scss to css
function style() {
    // where is my sass
    return gulp.src('./src/scss/**/*.scss')
        // pass that to compiler
        .pipe(sass())
        // where to save 
        .pipe(gulp.dest('./dist/css'))
        // stream changes to all browsers
        .pipe(browserSync.stream());
}

// 
function watch() {
    browserSync.init({
        server: {
            baseDir: './'
        }
    });
    gulp.watch('./src/scss/**/*.scss', style);
    gulp.watch('./*.html').on('change', browserSync.reload);
    gulp.watch('./dist/js/**/*.js', style).on('change', browserSync.reload);
}

exports.style = style;
exports.watch = watch;