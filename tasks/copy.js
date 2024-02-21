// const gulp = require("gulp");
import gulp from 'gulp'

export default function copy(done) {
  gulp
    .src(['source/fonts/*.{woff2,woff}', 'source/*.ico', 'source/animations/**/*'], {
      base: 'source',
    })
    .pipe(gulp.dest('build'))
  done()
}
