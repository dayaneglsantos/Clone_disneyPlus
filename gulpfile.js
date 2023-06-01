const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const sourcemaps = require("gulp-sourcemaps");
const imagemin = require("gulp-imagemin");
const uglify = require("gulp-uglify");

function scripts() {
  return gulp
    .src("./src/scripts/*.js")
    .pipe(uglify())
    .pipe(gulp.dest("./build/js"));
}

function compSass() {
  return gulp
    .src("./src/styles/*.scss")
    .pipe(sourcemaps.init())
    .pipe(sass({ outputStyle: "compressed" }))
    .pipe(sourcemaps.write(""))
    .pipe(gulp.dest("./build/styles"));
}

function images() {
  return gulp
    .src("./src/images/**/*")
    .pipe(imagemin())
    .pipe(gulp.dest("./build/images"));
}

exports.default = gulp.parallel(compSass, images, scripts);
exports.watch = function () {
  gulp.watch("./src/styles/*.scss", gulp.parallel(compSass));
  gulp.watch("./src/scripts/*.js", gulp.parallel(scripts));
};
