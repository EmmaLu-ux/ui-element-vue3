import gulp from "gulp"
import * as dartSass from "sass"
import gulpSass from "gulp-sass"
import autoprefixer from "gulp-autoprefixer"
import cleanCSS from "gulp-clean-css"
import gulpConcat from "gulp-concat"
import { deleteAsync } from "del"
import { pkgRoot, outputUmd, outputDir, rootDir } from "./common.js"

// 按需打包scss
const buildScssModules = async () => {
    const sass = gulpSass(dartSass)
    await new Promise((resolve) => {
        gulp.src(`${rootDir}/packages/theme/src/**/*.scss`)
            .pipe(sass.sync()) // 编译
            .pipe(autoprefixer({ cascade: false })) // 浏览器兼容，自动根据使用的css属性添加-webkit-、-ms-等等
            .pipe(cleanCSS()) // 压缩css
            // .pipe(gulpConcat('index.min.css')) // 合并到指定文件
            .pipe(gulp.dest(`${outputDir}/theme`)) //  输出到指定目录theme // NOTE: 按需打包后文件
            .on("end", resolve) // 监听流完成
    })
    deleteFiles() // 清理旧文件
}
// 删除指定文件或文件夹
const deleteFiles = async () => {
    await deleteAsync(
        [`${outputDir}/theme/index.css`, `${outputDir}/theme/common`], // 删除全量打包文件和公共样式目录
        { force: true } // 强制跨越当前目录删除文件
    )
}

// 全量打包scss
const buildScssFull = async () => {
    const sass = gulpSass(dartSass) // gulpSass支持编译scss
    await new Promise((resolve) => {
        gulp.src(`${pkgRoot}/theme/src/index.scss`) // 指定打包入口
            .pipe(sass.sync()) // 编译
            .pipe(autoprefixer({ cascade: false })) // 浏览器兼容，自动根据使用的css属性添加-webkit-、-ms-等等
            .pipe(cleanCSS()) // 压缩css
            .pipe(gulpConcat('index.min.css')) // 合并到指定文件 
            .pipe(gulp.dest(outputUmd)) //  输出到指定目录dist // NOTE: 全量打包后文件
            .on("end", resolve) // 监听流完成
    })
}

export const buildStyle = async () => {
    await Promise.all([buildScssFull(), buildScssModules()]) // 所有任务都会并行执行，提高效率。如果任何一个构建任务失败，整个构建过程就会失败
}

buildStyle()