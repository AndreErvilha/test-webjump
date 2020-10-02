const gulp = require('gulp')
const uglifycss = require('gulp-uglifycss')
const concat = require('gulp-concat')

function depsCSS() {
    return gulp.src('node_modules/font-awesome/css/font-awesome.css',{'cwd':'../../'})
        .pipe(uglifycss({ "uglyComments" : false }))
        .pipe(concat('deps.min.css'))
        .pipe(gulp.dest('public/assets/css',{'cwd':'../../'}))
}

function depsFonts() {
    return gulp.src('node_modules/font-awesome/fonts/*.*',{'cwd':'../../'})
        .pipe(gulp.dest('public/assets/fonts',{'cwd':'../../'}))
}

module.exports = {
    depsCSS,
    depsFonts
}