// generated on 2016-12-19 using generator-webapp 2.1.0
const gulp = require('gulp');
const gulpLoadPlugins = require('gulp-load-plugins');
const browserSync = require('browser-sync');
const del = require('del');

const $ = gulpLoadPlugins();
const reload = browserSync.reload;


gulp.task('scripts', () => {
    return gulp.src('app/scripts/**/*.js')
        .pipe($.plumber())
        // .pipe($.sourcemaps.init())
        // .pipe($.babel())
        // .pipe($.sourcemaps.write('.'))
        .pipe(gulp.dest('.tmp/scripts'))
        .pipe(reload({ stream: true }));
});

function lint(files, options) {
    return gulp.src(files)
        .pipe(reload({ stream: true, once: true }))
        .pipe($.eslint(options))
        .pipe($.eslint.format())
        .pipe($.if(!browserSync.active, $.eslint.failAfterError()));
}

gulp.task('lint', () => {
    return lint('app/scripts/**/*.js', {
            fix: true
        })
        .pipe(gulp.dest('app/scripts'));
});
gulp.task('lint:test', () => {
    return lint('test/spec/**/*.js', {
            fix: true,
            env: {
                mocha: true
            }
        })
        .pipe(gulp.dest('test/spec/**/*.js'));
});

gulp.task('html', ['scripts'], () => {
    return gulp.src('app/*.html')
        .pipe($.useref({ searchPath: ['.tmp', 'app', '.'] }))
        .pipe($.if('*.js', $.uglify()))
        .pipe($.if('*.html', $.htmlmin({ collapseWhitespace: true })))
        .pipe(gulp.dest('dist'));
});

gulp.task('extras', () => {
    return gulp.src([
        'app/*.*',
        '!app/*.html'
    ], {
        dot: true
    }).pipe(gulp.dest('dist'));
});

gulp.task('clean', del.bind(null, ['.tmp', 'dist']));

gulp.task('serve', ['scripts'], () => {
    browserSync({
        notify: false,
        port: 9000,
        server: {
            baseDir: ['.tmp', 'app'],
            routes: {
                '/bower_components': 'bower_components'
            }
        }
    });

    gulp.watch([
        'app/*.html'
    ]).on('change', reload);

    gulp.watch('app/scripts/**/*.js', ['scripts']);
});