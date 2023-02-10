import plumber from "gulp-plumber"; // Обработка ошибок
import pug from "gulp-pug";
import cached from "gulp-cached";

export const pugToHtml = () => {
    return app.gulp.src(app.path.src.pug)
        .pipe(plumber())
        .pipe(pug({ pretty: true }))
        .pipe(cached('pug'))
        .pipe(app.gulp.dest('build'));
};
