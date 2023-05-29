const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const sourcemaps = require("gulp-sourcemaps");

function compSass() {
  return gulp
    .src("./src/styles/*.scss")
    .pipe(sourcemaps.init())
    .pipe(sass({ outputStyle: "compressed" }))
    .pipe(sourcemaps.write(""))
    .pipe(gulp.dest("./build/styles"));
}

exports.default = compSass;
exports.watch = function () {
  gulp.watch("./src/styles/*.scss", gulp.parallel(compSass));
};
