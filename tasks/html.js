import gulp from 'gulp'
import htmlmin from 'gulp-htmlmin'
import chalk from 'chalk'
import fs from 'fs'
import fileinclude from 'gulp-file-include'

// const gulp = require('gulp')
// const htmlmin = require('gulp-htmlmin')
// const chalk = require('chalk')
// const fs = require('fs')
// const fileinclude = require('gulp-file-include')

const htmlMin = () => {
  return gulp
    .src(['source/*.html', '!source/components/**/*.html'])
    .pipe(
      fileinclude({
        prefix: '@@',
        basepath: '@file',
      })
    )
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('build'))
}

const showHtmlMinSize = done => {
  fs.readdir('build', (err, items) => {
    if (items) {
      for (let i = 0; i < items.length; i++) {
        let ext = items[i].split('.')[1]
        if (ext === 'html') {
          const minSize = fs.statSync(`build/${items[i]}`).size
          const fullSize = fs.statSync(`build/html-original/${items[i]}`).size
          console.log(`
${chalk.bold('HTML: ' + items[i])}
${chalk.bgRed('Original size: ' + fullSize + ' bytes')}
${chalk.black.bgGreen('Minified size: ' + minSize + ' bytes')}
==================
${chalk.bgYellow.black(
  'Saved: ' + Math.round(((fullSize - minSize) / fullSize) * 100) + '%'
)}
          `)
        }
      }
    }
  })
  done()
}

const htmlFull = () => {
  return gulp
    .src(['source/*.html', '!source/components/**/*.html'])
    .pipe(
      fileinclude({
        prefix: '@@',
        basepath: 'source',
        indent: true,
      })
    )
    .pipe(gulp.dest('build/html-original'))
}

const html = gulp.series(gulp.parallel(htmlFull, htmlMin), showHtmlMinSize)

export default html
