import svgo from "gulp-svgmin";

export const svg = () => {
    return app.gulp.src([
            `${app.path.src.img}**/*.svg`, 
            `!${app.path.src.img}sprite.svg`, 
            `!${app.path.src.img}sprite/*.svg`])
        .pipe(svgo())
        .pipe(app.gulp.dest(app.path.build.img));
}