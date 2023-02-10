import gulp from "gulp";
import { path } from "./gulp/config/path.js";
import { plugins } from "./gulp/config/plugins.js";


global.app = {
    gulp: gulp,
    path: path,
    plugins: plugins,
}

//Импорт задач
import { copy, copyImages} from "./gulp/tasks/copy.js";
import { reset } from "./gulp/tasks/reset.js";
import { pugToHtml } from "./gulp/tasks/pugToHtml.js";
import { scripts } from "./gulp/tasks/scripts.js";
import { styles } from "./gulp/tasks/styles.js";

import { optimizeImages, createWebp } from "./gulp/tasks/optimizeImages.js";
import { sprite } from "./gulp/tasks/sprite.js";
import { svg } from "./gulp/tasks/svg.js";


function watcher() {
    gulp.watch(path.watch.scss, styles);
    gulp.watch(path.watch.js, scripts);
    gulp.watch(path.watch.img, copyImages);
    gulp.watch(path.watch.pug, pugToHtml)
}

const mainTasks = gulp.parallel(
    styles,
    pugToHtml,
    scripts,
    svg,
    createWebp
);

//Построение сценария выполнения задач
const dev = gulp.series(reset, copy, optimizeImages, sprite, mainTasks, watcher);
const build = gulp.series(reset, copy, optimizeImages, sprite, mainTasks);

gulp.task('default', dev);
gulp.task('build', build);
