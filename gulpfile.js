const gulp = require('gulp');
const uglify = require('gulp-uglify');
const cleanCss = require('gulp-clean-css');
const htmlMin = require('gulp-htmlmin');
const htmlClean = require('gulp-htmlclean');
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
    .pipe(cleanCss())
    .pipe(gulp.dest('./build'));
}

function minifyHTML() {
  return gulp
    .src('dist/**/*.wxml')
    .pipe(
      htmlMin({
        removeComments: true,
        collapseWhitespace: true
      })
    )
    .pipe(htmlClean())
    .pipe(gulp.dest('./build'));
}

function copyOther() {
  return gulp.src('dist/**/*.map').pipe(gulp.dest('./build'));
}

function cleanBuild() {
  return del(['build/**/*']);
}

function cleanDist() {
  return del(['dist/**/*']);
}

gulp.task(
  'build',
  gulp.series(
    cleanBuild,
    gulp.parallel(minifyJS, minifyCSS, minifyHTML, copyOther),
    cleanDist
  )
);

gulp.task('default', gulp.series('build'));
