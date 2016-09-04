'use strict'

var gulp = require('gulp');
var sass = require('gulp-sass');
var pug  = require('gulp-pug');


// sass
gulp.task('sass', function(){
    return gulp.src('webroot/src/css/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('webroot/dist/css'))
});

// pug
gulp.task('pug', function(){
    return gulp.src('webroot/src/html/*.pug')
        .pipe(pug())
        .pipe(gulp.dest('webroot/dist/html'))
});

// default
gulp.task('default', function(){
    console.log('default');
});