'use strict';

var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    livereload = require('gulp-livereload'),
    concat = require('gulp-concat'),
    sass = require('gulp-sass'),
    plumber = require('gulp-plumber'),
    sourcemaps = require('gulp-sourcemaps'),
    autoprefixer = require('gulp-autoprefixer'),
    del = require('del'),
    zip = require('gulp-zip');

// Image Compression
var imagemin = require('gulp-imagemin'),
    imageminPngquant = require('imagemin-pngquant'),
    imageminJpegRecompress = require('imagemin-jpeg-recompress');

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

// Clean and Delete Files & Folders
gulp.task('clean', function() {
    return del.sync([
        DIST_PATH
    ]);
});

// Default
gulp.task('default', ['clean', 'images', 'styles', 'scripts'], function() {
    console.log('starting default task');
});

// Zip Files
gulp.task('export', function() {
    return gulp.src([
        'public/index.html',
        'public/dist/**',
        'public/employee-directory',
        'public/photo-gallery',
        'public/registration-form',
        'public/responsive-layout',
        'public/site-optimisation',
        'public/web-dashboard'
    ])
        .pipe(zip('website.zip'))
        .pipe(gulp.dest('./'));
});

// Watch
gulp.task('watch', ['default'], function() {
    console.log('starting watch task');

    require('./server.js');
    livereload.listen();
    gulp.watch(SCRIPTS_PATH, ['scripts']);
    gulp.watch(SASS_PATH, ['styles']);
});