export const outputPkgDir = "FloriUI"

import { fileURLToPath } from "url";
import { resolve, dirname } from "path";

export const filePath = fileURLToPath(import.meta.url);
export const dirName = dirname(filePath);
export const rootDir = resolve(dirName, "..", ".."); // UI组件根目录
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