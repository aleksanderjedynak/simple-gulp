var gulp = require('gulp');
var browserSync = require('browser-sync');
var sass = require('gulp-sass');

gulp.task('reload', function() {
    /**
     * pelne przeladowanie przegladarki
     * */
    browserSync.reload();
});

gulp.task('serve',['sass'], function(){
    browserSync({
        server: 'src'
    });

    gulp.watch('src/*.html', ['reload']);
    gulp.watch('src/scss/**/*.scss', ['sass']);
});

gulp.task('sass', function(){
    return gulp.src('src/scss/**/*.scss')
        .pipe( sass().on('error', sass.logError) )
        .pipe( gulp.dest('src/css') )
        .pipe( browserSync.stream() );
    /**
     * stream -> to wstrzykniecie
     * */
});

gulp.task('default', ['serve']);