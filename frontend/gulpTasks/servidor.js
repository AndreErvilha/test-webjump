const gulp = require('gulp')
const webserver = require('gulp-webserver')
const watch = require('gulp-watch')

function servidor(cb) {
    return gulp.src('public',{'cwd':'../../'})
        .pipe(webserver({
            port: 8080,
            open: true,
            livereload: true,
        }))
}

function monitorarArquivos(cb) {
    watch('**/*.html', () => gulp.series('appHTML')())
    watch('**/*.scss', () => gulp.series('appCSS')())
    watch('**/*.js', () => gulp.series('appJS')())
    watch('assets/imgs/**/*.*', () => gulp.series('appIMG')())
    return cb()
}

module.exports = {
    monitorarArquivos,
    servidor
}