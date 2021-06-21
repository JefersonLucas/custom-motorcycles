import gulp from "gulp";
import sass from "gulp-sass";

function compilaSass() {
  return gulp
    .src(["./sass/**/*.scss"])
    .pipe(
      sass({
        outputStyle: "expanded",
        errLogToConsole: true,
      }),
    )
    .pipe(gulp.dest("./css"));
}

gulp.task("sass", compilaSass);

function watch() {
  gulp.watch("./sass/**/*.scss", compilaSass);
}

gulp.task("default", watch);
