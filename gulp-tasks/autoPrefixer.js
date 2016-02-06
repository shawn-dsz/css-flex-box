module.exports = function (gulp, plugins, path) {
  return function() {
    return gulp.src(path.css)
      .pipe(plugins.autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false
      }))
      .pipe(gulp.dest(path.dest));
  }
}
