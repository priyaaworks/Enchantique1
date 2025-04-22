const { src, dest, task } = require('gulp');

task('hello', function (done) {
  console.log('✨ Hello from Gulp!');
  done();
});
// gulpfile.js
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

// Sass task
gulp.task('sass', function () {
  return gulp.src('src/scss/**/*.scss') // Change as per your structure
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dist/css')); // Output path
});
