import svgo from "gulp-svgmin";
import svgstore from "gulp-svgstore";
import rename from "gulp-rename";


export const sprite = () => {
    return app.gulp.src(`${app.path.src.img}sprite/*.svg`)
        .pipe(svgo())
        .pipe(svgstore({
            inlineSvg: true
        }))
        .pipe(rename('sprite-auto.svg'))
        .pipe(app.gulp.dest(app.path.build.img));
}
