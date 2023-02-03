import dartSass from 'sass'
import gulpSass from 'gulp-sass'
const sass = gulpSass(dartSass);
import postcss from 'gulp-postcss';
import autoprefixer from 'autoprefixer';
import csso from 'gulp-csso';
import rename from 'gulp-rename';
import plumber from "gulp-plumber"; // Обработка ошибок
import browser from "browser-sync";


export const styles = () => {
    return app.gulp.src(app.path.src.scss, { sourcemaps: true })
        .pipe(plumber())
        .pipe(sass())
        .pipe(postcss([
            autoprefixer({
            grid: true,
            })
        ]))
        .pipe(csso())
        .pipe(rename('style.css'))
        .pipe(app.gulp.dest('build/css', { sourcemaps: '.' }))
        .pipe(browser.stream());
}
