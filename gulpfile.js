var gulp        = require('gulp');
var sass        = require('gulp-sass');
var browserSync = require('browser-sync').create();

function style() {
    return gulp.src(['node_modules/bootstrap/scss/bootstrap.scss', 'src/scss/*.scss'])
    .pipe(sass())
    .pipe(gulp.dest("src/css"))
    .pipe(browserSync.stream());
}

function js() {
    return gulp.src(['node_modules/bootstrap/dist/js/bootstrap.min.js', 'node_modules/jquery/dist/jquery.min.js','node_modules/popper.js/dist/umd/popper.min.js'])
    .pipe(gulp.dest("src/js"))
    .pipe(browserSync.stream());
}

function watch() {
    browserSync.init({
        server: {
            baseDir: 'src/'
        }
    });
    gulp.watch('src/scss/*.scss', style);
    gulp.watch("src/*.html").on('change', browserSync.reload);
    gulp.watch('src/js/.*js').on('change', browserSync.reload);
}

const build = gulp.series(gulp.parallel(style, js, watch))

exports.style = style;
exports.watch = watch;
exports.build = build;
