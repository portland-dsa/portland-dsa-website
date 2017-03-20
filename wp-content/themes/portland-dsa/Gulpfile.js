var gutil = require('gulp-util');
var gulp = require('gulp');
var babelify = require('babelify');
var browserify = require('browserify');
var buffer = require('vinyl-buffer');
var source = require('vinyl-source-stream');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');
var sass = require('gulp-sass');
var clean = require('gulp-clean');
var gulpif = require('gulp-if');


/*
* Delete javascript from the build directory
*/
gulp.task('clean-scripts', function() {
  gulp.src('assets/javascript/**/*.js', {read: false})
    .pipe(clean());
});

/*
* Delete CSS from the build directory
*/
gulp.task('clean-css', function() {
  gulp.src('style.css', {read: false})
    .pipe(clean());
});

/*
 * Transpile ES2015 code to ES5 using Babel and browserify
 */
var compile_js = function(compress) {
  return browserify('src/javascript/app.js', { debug: true })
    .transform('babelify', { presets: ['es2015'] })
    .bundle()
    .on('error', gutil.log.bind(gutil, 'Browserify Error'))
    .pipe(source('app.js'))
    .pipe(buffer())
    .pipe(gulpif(!compress, sourcemaps.init({ loadMaps: true })))
    .pipe(gulpif(compress, uglify()))
    .pipe(gulpif(!compress, sourcemaps.write('.')))
    .pipe(gulp.dest('assets/javascript'));
}

gulp.task('transpile:development', ['clean-scripts'], function() {
  return compile_js(false);
});

gulp.task('transpile:production', ['clean-scripts'], function() {
  return compile_js(true);
});

/*
 * Convert SASS files to CSS
 */

var compile_sass = function(compress) {
  return gulp.src('src/scss/**/style.scss')
    .pipe(gulpif(!compress, sourcemaps.init({ loadMaps: true })))
    .pipe(sass({
      outputStyle: (compress ? 'compressed' : 'expanded'),
      includePaths: require('node-reset-scss').includePaths
    }).on('error', sass.logError))
    .pipe(gulpif(!compress, sourcemaps.write('.')))
    .pipe(gulp.dest('.'));
}

gulp.task('sass:development', ['clean-css'], function() {
  compile_sass(false);
});

gulp.task('sass:production', ['clean-css'], function() {
  compile_sass(true);
});
/*
 * Watch for when JS, or SCSS files change so they can be updated
 */
gulp.task('watch', ['transpile:development', 'sass:development'], function() {
  gulp.watch('src/javascript/**/*.js', ['transpile:development']);
  gulp.watch('src/scss/**/*.scss', ['sass:development']);
});

gulp.task('build', ['sass:production', 'transpile:production']);
gulp.task('default', ['build', 'watch']);
