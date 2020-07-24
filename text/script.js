var autoprefixer = require('gulp-autoprefixer');
gulp.task('style', function() {
  .src('src/scss/main.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(autoprefixer({
    browsers: [
      'last 3 versions',
      'iOS >= 8',
      'Safari >= 8',
      'ie 11',
    ]
  }))
  .pipe(gulp.dest('dist/css'))
})