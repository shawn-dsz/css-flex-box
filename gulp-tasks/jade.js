module.exports = function (gulp, plugins, path) {
  return function() {
    return gulp.src(path.jade)
        .pipe(plugins.gulpJade({
          jade: plugins.jade,
          pretty: true
        }))
        .pipe(gulp.dest(path.dest))
  }
}
