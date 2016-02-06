module.exports = function (gulp, plugins, path) {
  return function () {
    gulp.src(path.scss)
      .pipe(plugins.sass.sync().on('error', plugins.sass.logError))
      .pipe(gulp.dest(path.dest))
  }
}
