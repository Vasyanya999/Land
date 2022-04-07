const { src, dest } = require('gulp');

const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');
const cssmin = require('gulp-cssmin');
const size = require('gulp-size')


function styles() {
  return (src('app/scss/main.scss'))
    .pipe(sass())
    .pipe(autoprefixer({
      overrideBrowserslist: ['last 5 versions'],
      gride: true,
    }))
    .pipe(size({ title: "До сжатия CSS" }))
    .pipe(cssmin())
    .pipe(size({ title: "После сжатия CSS" }))
    .pipe(dest('./public'))
}

module.exports = styles;