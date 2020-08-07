const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();

// compile scss to css
function style() {
  return gulp
    // only select style.scss for compiling, prevent individual compiling of partials
    .src('./assets/sass/style.scss')
    // pass through sass compiler
    .pipe(sass().on('error', sass.logError))
    // css file destination
    .pipe(gulp.dest('.'))
    // strem changes to browser
    .pipe(browserSync.stream());
}

function watch() {
  browserSync.init({
    // set proxy for local site
    proxy: {
      target: 'http://localhost/iftakhar/',
    }
  });
  // compile scss to css and inject to browser on any scss file change
  gulp.watch('./assets/sass/**/*.scss', style);
  // reload on js file change
  gulp.watch('./assets/js/**/*.js').on('change', browserSync.reload);
}

// Thiese will need global gulp-cli to execute as gulp command
exports.style = style;
exports.watch = watch;
