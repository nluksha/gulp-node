const gulp = require('gulp');
const babel = require('gulp-babel');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');


function build() {
  return gulp.src('app/**.js', { sourcemaps: true })
    .pipe(babel({
      presets: ['@babel/preset-env', '@babel/preset-react']
    }))
    .pipe(concat('all.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist', { sourcemaps: true })); 
}

function rebuild() {
  console.log('Files changed');

  return build();
}

gulp.task('default', build);
gulp.watch('app/**.js', rebuild);
