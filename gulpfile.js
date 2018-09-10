var gulp = require('gulp');
var browserSync = require('browser-sync');

gulp.task('reload', function() {
    /**
     * pelne przeladowanie przegladarki
     * */
    browserSync.reload();
});

gulp.task('serve', function(){
    browserSync({
        server: 'src'
    });

    gulp.watch('src/*.html', ['reload']);
});

gulp.task('default', ['serve']);