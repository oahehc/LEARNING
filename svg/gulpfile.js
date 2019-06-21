const gulp = require('gulp');
const browserSync = require('browser-sync');
const reload = browserSync.reload;

gulp.task('serve', () => {
  browserSync({
    notify: false,
    port: 9000,
    server: {
      baseDir: ['./html/'],
    },
  });

  gulp.watch(['./html/*.html']).on('change', reload);
});
