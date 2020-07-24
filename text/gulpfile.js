var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
const { src, dest } = require('gulp');
var sass = require('gulp-sass');


gulp.task("styles", function(){
    src('css/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
        grid: 'autoplace',
        browsers: [
          'last 3 versions',
          'iOS >= 8',
          'Safari >= 8',
          'ie 11',
          "> 1%",
          "ie >= 7",
          "edge >= 15",
          "ie_mob >= 10",
          "ff >= 45",
          "chrome >= 45",
          "opera >= 23",
          "android >= 4",
          "bb >= 10"
        ]
      }))
    .pipe(dest('build'));
})

gulp.task('watch', function(){
    gulp.watch('css/*.css' ,gulp.series('styles'));
});