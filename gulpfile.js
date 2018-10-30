'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync').create();
var postcss		= require("gulp-postcss");
var cssImport		= require("postcss-import");
 
gulp.task('sass', function (done) {
    gulp.src('./sass/*.scss')
        .pipe(sass({
            outputStyle: 'expanded',
            indentWidth: 4
        }).on('error', sass.logError))
        .pipe(postcss([
            cssImport({
                path: [ 'node_modules' ]
            })
        ]))
        .pipe(autoprefixer({
            browsers: ["last 2 versions"],
            grid: true
        }))
        .pipe(gulp.dest('./css'));
    done();
});
 
gulp.task('watch', function () {
    gulp.watch('./sass/**/*.scss', gulp.series('sass'));
});

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: './css/',
        },
        socket: {
            domain: 'localhost:3000'
        },
        files: ['./css/style.css'],
        open: false
    });
});

gulp.task('default', gulp.series(
    'sass',
    gulp.parallel('browser-sync', 'watch')
));