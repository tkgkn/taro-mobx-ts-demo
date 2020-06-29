const gulp = require('gulp');
const uglify = require('gulp-uglify');
const cssnano = require('gulp-cssnano');
const htmlClean = require('gulp-htmlclean');
const imageMin = require('gulp-imagemin');
const del = require('del');

function minifyJS() {
  return gulp
    .src('dist/**/*.js')
    .pipe(
      uglify({
        output: {
          comments: false
        }
      })
    )
    .pipe(gulp.dest('./build'));
}

function minifyCSS() {
  return gulp
    .src('dist/**/*.wxss')
    .pipe(cssnano())
    .pipe(gulp.dest('./build'));
}

function minifyHTML() {
  return gulp
    .src('dist/**/*.wxml')
    .pipe(htmlClean())
    .pipe(gulp.dest('./build'));
}

function minifyImg() {
  return gulp
    .src(['dist/**/*.png', 'dist/**/*.jpg'])
    .pipe(imageMin())
    .pipe(gulp.dest('./build/'));
}

function copyOther() {
  return gulp
    .src(['dist/**/*.map', 'dist/**/*.json', 'dist/**/*.wxs'])
    .pipe(gulp.dest('./build'));
}

function cleanBuild() {
  return del(['build/**/*']);
}

function cleanDist() {
  return del(['dist/**/*']);
}

function carry() {
  return gulp.src('build/**/*').pipe(gulp.dest('dist'));
}

gulp.task(
  'build',
  gulp.series(
    cleanBuild,
    gulp.parallel(minifyJS, minifyCSS, minifyHTML, minifyImg, copyOther),
    cleanDist,
    carry
  )
);

gulp.task('default', gulp.series('build'));
