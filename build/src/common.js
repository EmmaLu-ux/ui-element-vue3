export const outputPkgDir = "flori-ui" // 打包输出的文件夹，内有多种输出模式的打包文件夹

import { fileURLToPath } from "url";
import { resolve, dirname } from "path";

/**
 * import.meta.url：返回当前模块文件的完整URL
 * fileURLToPath(import.meta.url)：将文件URL转换为文件路径
 * resolve(dirName, "..", "..")：将文件路径转换为目录路径
 */
// console.log('import.meta.url', import.meta.url); // file:///Users/emmalu/Documents/study/frontend/workspace/tech_projects/ui-element-vue3/build/src/common.js
export const filePath = fileURLToPath(import.meta.url);
export const dirName = dirname(filePath);
export const rootDir = resolve(dirName, "..", ".."); // 项目根目录
export const pkgRoot = resolve(rootDir, 'packages');// ui组件包目录
// console.log('filePath', filePath); // /Users/emmalu/Documents/study/frontend/workspace/tech_projects/ui-element-vue3/build/src/common.js
// console.log('dirName', dirName); // /Users/emmalu/Documents/study/frontend/workspace/tech_projects/ui-element-vue3/build/src
// console.log('rootDir', rootDir); // /Users/emmalu/Documents/study/frontend/workspace/tech_projects/ui-element-vue3
// console.log('pkgRoot', pkgRoot); // /Users/emmalu/Documents/study/frontend/workspace/tech_projects/ui-element-vue3/packages

export const outputDir = resolve(rootDir, outputPkgDir); // 
export const outputEsm = resolve(rootDir, outputPkgDir, "es"); // ESM目录
export const outputCjs = resolve(rootDir, outputPkgDir, "lib"); // CJS目录
export const outputUmd = resolve(rootDir, outputPkgDir, "dist"); // UMD目录

// console.log('outputDir', outputDir); // /Users/emmalu/Documents/study/frontend/workspace/tech_projects/ui-element-vue3/FloriUI
// console.log('outputEsm', outputEsm); // /Users/emmalu/Documents/study/frontend/workspace/tech_projects/ui-element-vue3/FloriUI/es
// console.log('outputCjs', outputCjs); // /Users/emmalu/Documents/study/frontend/workspace/tech_projects/ui-element-vue3/FloriUI/lib
// console.log('outputUmd', outputUmd); // /Users/emmalu/Documents/study/frontend/workspace/tech_projects/ui-element-vue3/FloriUI/dist