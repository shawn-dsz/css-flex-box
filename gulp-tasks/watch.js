module.exports = function (gulp, plugins, path) {
  return function() {
    gulp.watch(path.css, ['auto-prefix']);
    gulp.watch(path.scss, ['sass']);
    gulp.watch(path.jade, ['jade']);
  }
}
