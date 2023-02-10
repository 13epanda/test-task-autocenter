//Получаем имя папки проекта
import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = `./build`;
const srcFolder = `./source`;

export const path = {
    build: {
        default: buildFolder,
        pug: `${buildFolder}/`,
        img: `${buildFolder}/img/`,
        js: `${buildFolder}/js/`,
    },
    src: {
        default: srcFolder,
        pug: `${srcFolder}/pug/pages/*.pug`,
        img: `${srcFolder}/img/`,
        js: `${srcFolder}/js/**/*.js`,
        scss: `${srcFolder}/scss/style.scss`,
    },
    watch: {
        pug: `${srcFolder}/pug/**/*.pug`,
        img: `${srcFolder}/img/**/*.{png,jpg}*`,
        js: `${srcFolder}/js/*.js`,
        scss: `${srcFolder}/scss/**/*.scss`,
    },
    clean: buildFolder,
    buildFolder: buildFolder,
    srcFolder: srcFolder,
    rootFolder: rootFolder
}
