const gulp = require('gulp');
const babel = require('gulp-babel');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');

gulp.task('default', () => {
  return gulp.src('app/**.js', { sourcemaps: true })
    .pipe(babel({
      presets: ['@babel/preset-env', '@babel/preset-react']
    }))
    .pipe(concat('all.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist', { sourcemaps: true }));
});

gulp.watch('app/**.js', cd => {
  console.log('Changed');

  cd();
})