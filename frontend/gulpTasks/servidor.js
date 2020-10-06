const gulp = require('gulp')
const webserver = require('gulp-webserver')
const watch = require('gulp-watch')

function servidor(cb) {
    return gulp.src('public',{'cwd':'../'})
        .pipe(webserver({
            port: 80,
            open: true,
            livereload: true,
            middleware: [
                (req, res, next) => {
                    res.setHeader("Access-Control-Allow-Origin","*");
                    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
                    res.setHeader("Access-Control-Allow-Methods", "GET, POST, DELETE, PUT");
                    //res.setHeader('Content-type', 'application/json');
                  next();
                }
              ]
        }))
}

function monitorarArquivos(cb) {
    watch('src/**/*.html', () => gulp.series('appHTML')())
    watch('src/**/*.scss', () => gulp.series('appCSS')())
    watch('src/**/*.js', () => gulp.series('appJS')())
    watch('src/assets/imgs/**/*.*', () => gulp.series('appIMG')())
    return cb()
}

module.exports = {
    monitorarArquivos,
    servidor
}