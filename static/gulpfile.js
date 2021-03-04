var gulp = require('gulp')
var sass = require('gulp-sass')
var uglify = require('gulp-uglify')

gulp.task('welcome-message', function () {
    return console.log('welcome to gulp')
})

// gulp.task('copy-files', function(){
//     return gulp.src('scss/style.css')
//                 .pipe(gulp.dest('../dist/css'));
// })

gulp.task('sass', function(){
    return gulp.src('src/scss/style.scss')
        .pipe(sass())
        .pipe(gulp.dest('dist/css'));
})

gulp.task('minify-js', function(){
    return gulp.src('src/js/app.js')
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'))
})