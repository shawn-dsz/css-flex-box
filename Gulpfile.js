var path = {
  scss: './styles/**/*.scss',
  jade: './src/**/*.jade',
  dest: './dist/'
}
var gulp = require('gulp')
var plugins = require('gulp-load-plugins')({
  rename: {
    'gulp-jade': 'gulpJade',
    'jade': 'jade'
  }
})

function getTask (task) {
  return require('./gulp-tasks/' + task)(gulp, plugins, path)
}

gulp.task('auto-prefix', getTask('autoPrefixer'))
gulp.task('jade', getTask('jade'))
gulp.task('sass', getTask('sass'))
gulp.task('watch', getTask('watch'))
gulp.task('default', ['watch'])
