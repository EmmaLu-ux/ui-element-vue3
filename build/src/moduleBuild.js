import glob from 'fast-glob'
import { rollup } from 'rollup'
import { nodeResolve } from "@rollup/plugin-node-resolve";
import postcss from "rollup-plugin-postcss"
import vue from "@vitejs/plugin-vue";
import esbuild from "rollup-plugin-esbuild";

import { pkgRoot, outputPkgDir, outputEsm, outputCjs } from "./common.js"

// 重写样式文件中的模块路径引用
const compileStyleEntry = () => {
    const themeEntryPrefix = `@ui-element-vue3/theme/src/`
    return {
        name: 'compile-style-entry', // 当构建出错时，会显示 "compile-style-entry" 插件相关的错误
        // 拦截所有的模块解析请求，无论是来自 @use、@import 还是其他引用方式。它的作用是将构建过程中的路径引用重定向到正确的输出目录。
        resolveId(id) {
            // console.log('id', id)
            if (!id.startsWith(themeEntryPrefix)) return
            return {
                id: id.replaceAll(themeEntryPrefix, `${outputPkgDir}/theme/`).replace('.scss', '.css'),
                external: 'absolute'
            }
        }
    }
}

// ESM 和CJS 打包
export const moduleBuildEntry = async () => {
    const input = await glob("**/*.{js,ts,vue}", {
        cwd: pkgRoot,
        absolute: true, // 返回绝对路径
        onlyFiles: true, // 只返回文件的路径，不需要目录
    })

    const writeBundles = await rollup({
        input,
        plugins: [
            compileStyleEntry(),
            vue(),
            nodeResolve({ extensions: ['.ts'] }),
            esbuild(),
            postcss({
                extract: true, // css通过链接引入
            })
        ],
        external: [
            'vue',
            '@vue/shared',
            'async-validator'
        ]
    })
    writeBundles.write({
        format: 'esm',
        dir: outputEsm, // 打包后组件输出目录
        preserveModules: true, // 使打包后的组件库模块结构和源码的模块结构保持一致
        preserveModulesRoot: pkgRoot, // 设置模块根目录，移除packages前缀
        entryFileNames: `[name].mjs`,
        sourcemap: true,
        exports: 'named' // 解决同时使用命名导出和默认导出的警告
    })
    writeBundles.write({
        format: 'cjs',
        dir: outputCjs,
        preserveModules: true,
        preserveModulesRoot: pkgRoot, // 设置模块根目录，移除packages前缀
        entryFileNames: `[name].cjs`,
        sourcemap: true,
        exports: 'named' // 解决同时使用命名导出和默认导出的警告
    })
}