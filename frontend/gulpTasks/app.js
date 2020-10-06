const gulp = require('gulp')
const babel = require('gulp-babel')
const uglify = require('gulp-uglify')
const sass = require('gulp-sass')
const uglifycss = require('gulp-uglifycss')
const concat = require('gulp-concat')
const htmlmin = require('gulp-htmlmin')

function appHTML() {
    console.log("html")
    return gulp.src('frontend/src/**/*.html',{'cwd':'../'})
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest('public',{'cwd':'../'}))
}

function appCSS() {
    return gulp.src('frontend/src/assets/sass/index.scss',{'cwd':'../','allowEmpty':true})
        .pipe(sass().on('error', sass.logError))
        .pipe(uglifycss({ "uglyComments": true }))
        .pipe(concat('app.min.css'))
        .pipe(gulp.dest('public/assets/css',{'cwd':'../'}))
}

function appJS() {
    return gulp.src('frontend/src/assets/js/**/*.js',{'cwd':'../'})
        .pipe(babel({ presets: ['ENV'] }))
        .pipe(uglify())
        .pipe(concat('app.min.js'))
        .pipe(gulp.dest('public/assets/js',{'cwd':'../'}))
}

function appIMG() {
    return gulp.src('frontend/src/assets/img/**/*.*',{'cwd':'../'})
        .pipe(gulp.dest('public/media',{'cwd':'../'}))
}

gulp.task('appHTML', appHTML)
gulp.task('appCSS', appCSS)
gulp.task('appJS', appJS)
gulp.task('appIMG', appIMG)

module.exports = {
    appHTML,
    appCSS,
    appJS,
    appIMG
}