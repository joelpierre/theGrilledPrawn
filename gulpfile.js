const gulp = require('gulp'),
    prefix = require('gulp-autoprefixer'),
    uglify = require('gulp-uglify'),
    sass = require('gulp-sass'),
    livereload = require('gulp-livereload'),
    imageMin = require('gulp-imagemin'),
    pngquant = require('imagemin-pngquant'),
    plumber = require('gulp-plumber'),
    babel = require('gulp-babel'),
    sourcemaps = require('gulp-sourcemaps'),
    concat = require('gulp-concat');

// Scripts Task -
// gulp.task('scripts', function() {
//   gulp.src('assets/js/*.js').
//       pipe(plumber()).
//       pipe(uglify()).
//       pipe(plumber.stop()).
//       pipe(gulp.dest('dist/js'));
// });

gulp.task('scripts', () =>
    gulp.src('assets/js/*.js').
        pipe(plumber()).
        pipe(sourcemaps.init()).
        pipe(babel({
          presets: ['env'],
        })).
        pipe(concat('all.js')).
        pipe(sourcemaps.write('.')).
        pipe(plumber.stop()).
        pipe(gulp.dest('dist/js')),
);

// Compress SCSS Task -
gulp.task('sass', function() {
  gulp.src('assets/sass/**/*.scss').pipe(plumber()).pipe(sass({
    outputStyle: 'compressed',
  })).pipe(plumber.stop()).pipe(prefix({
    browsers: ['last 2 versions'],
  })).pipe(gulp.dest('dist/css/')).pipe(livereload());
});

// Image Task - Compress Images
gulp.task('image', function() {
  gulp.src('assets/images/**/*').pipe(imageMin({
    progressive: true,
    svgoPlugins: [{removeViewBox: false}],
    use: [pngquant()],
  })).pipe(gulp.dest('dist/media/images'));
});

// Watch Task -

gulp.task('watch', function() {

  livereload.listen();

  gulp.watch('assets/js/*.js', ['scripts']);
  gulp.watch('assets/img/**/*', ['image']);
  gulp.watch('assets/sass/**/*.scss', ['sass']);
});

gulp.task('default', ['scripts', 'sass', 'image', 'watch']);
