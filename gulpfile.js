const gulp = require('gulp');
const sourcemaps = require('gulp-sourcemaps');
const babel = require('gulp-babel');
const concat = require('gulp-concat');
const watch = require('gulp-watch');
const pug = require('gulp-pug-3');
const sass = require('gulp-sass')(require('sass'));
const image = require('gulp-image');
let browserSync = require('browser-sync').create();

const distFolder = 'docs/'

gulp.task('sass', () => {
    return gulp.src('src/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(sourcemaps.write())
        .pipe(concat('index.css'))
        .pipe(gulp.dest(distFolder))
        .pipe(browserSync.stream());
})

gulp.task('js', () => {
    return gulp.src('src/**/*.js')
        .pipe(sourcemaps.init())
        .pipe(babel({presets: ['es2015', 'react']}))
        .pipe(concat('index.js'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(distFolder))
        .pipe(browserSync.stream());
});

gulp.task('pug', (done) => {
    gulp.src('src/index.pug')
        .pipe(pug({ pretty: '\t' }))
        .pipe(browserSync.stream())
        .pipe(gulp.dest(distFolder))
    done()
})

gulp.task('image', (done) => {
    gulp.src('src/images/**/*')
        .pipe(image())
        .pipe(gulp.dest(distFolder + 'images'))
    done()
})

gulp.task('watch', () => {
    watch('src/**/*.js', gulp.series('js'));
    watch('src/**/*.pug', gulp.series('pug'));
    watch('src/**/*.scss', gulp.series('sass'));

    browserSync.init({
        server: distFolder,
    });
});

gulp.task('default', gulp.series(['sass', 'js', 'pug', 'image', 'watch']));