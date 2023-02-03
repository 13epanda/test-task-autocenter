import squoosh from "gulp-libsquoosh";

const optimizeImages = () => {
    return app.gulp.src(`${app.path.src.img}/**/*.{png,jpg}`)
        .pipe(squoosh())
        .pipe(app.gulp.dest(app.path.build.img))
}

const createWebp = () => {
    return app.gulp.src(`${app.path.src.img}**/*.{png,jpg}`)
        .pipe(squoosh({
            webp: {}
        }))
        .pipe(app.gulp.dest(app.path.build.img))
}

export {optimizeImages, createWebp}