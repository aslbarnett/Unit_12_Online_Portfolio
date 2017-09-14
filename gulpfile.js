'use strict';

var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    livereload = require('gulp-livereload'),
    concat = require('gulp-concat'),
    sass = require('gulp-sass'),
    plumber = require('gulp-plumber'),
    minifyCss = require('gulp-minify-css'),
    sourcemaps = require('gulp-sourcemaps'),
    autoprefixer = require('gulp-autoprefixer');

// Image Compression
var imagemin = require('gulp-imagemin'), imageminPngquant = require('imagemin-pngquant'), imageminJpegRecompress = require('imagemin-jpeg-recompress');

// File Paths
var DIST_PATH = 'public/dist';
var SCRIPTS_PATH = 'public/scripts/**/*.js';
var SASS_PATH = 'public/scss/**/*.scss';
var IMAGES_PATH = 'public/images/**/*.{png,jpeg,jpg,svg,gif}';

// SASS
gulp.task('styles', function() {
    console.log('starting styles task');

    return gulp.src('public/scss/application.scss')
        .pipe(plumber(function (err) {
            console.log('Styles Task Error');
            console.log(err);
            this.emit('end');
        }))
        .pipe(sourcemaps.init())
        .pipe(autoprefixer())
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(DIST_PATH))
        .pipe(livereload());
});

// Scripts
gulp.task('scripts', function() {
    console.log('starting scripts task');

    return gulp.src(SCRIPTS_PATH)
        .pipe(plumber(function (err) {
            console.log('Scripts Task Error');
            console.log(err);
            this.emit('end');
        }))
        .pipe(sourcemaps.init())
        .pipe(uglify())
        .pipe(concat('scripts.js'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(DIST_PATH))
        .pipe(livereload());
});

// Images
gulp.task('images', function() {
    console.log('starting images task');

    return gulp.src(IMAGES_PATH)
        .pipe(imagemin([
            imagemin.gifsicle(),
            imagemin.jpegtran(),
            imagemin.optipng(),
            imagemin.svgo(),
            imageminPngquant(),
            imageminJpegRecompress()
        ]))
        .pipe(gulp.dest(DIST_PATH + '/images'));
});

// Default
gulp.task('default', ['images', 'styles', 'scripts'], function() {
    console.log('starting default task');
});

// Watch
gulp.task('watch', ['default'], function() {
    console.log('starting watch task');

    require('./server.js');
    livereload.listen();
    gulp.watch(SCRIPTS_PATH, ['scripts']);
    gulp.watch(SASS_PATH, ['styles']);
});