const copyImages = () => {
    return app.gulp.src(`${app.path.src.img}**/*.{png,jpg}`)
        .pipe(app.gulp.dest(app.path.build.img))
}

const copy = (done) => {
    app.gulp.src([
        `${app.path.srcFolder}/fonts/*.{woff2,woff}`,
        `${app.path.srcFolder}/favicon/**/*`,
    ], {
        base: 'source'
    })
        .pipe(app.gulp.dest('build'))
    done();
}

export {copy, copyImages}
