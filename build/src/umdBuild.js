import { rollup } from 'rollup';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import vue from '@vitejs/plugin-vue';
import esbuild from 'rollup-plugin-esbuild';
import postcss from 'rollup-plugin-postcss';

import { resolve } from 'path';
import { pkgRoot, outputUmd } from './common.js';

const umdBuildEntry = async () => {
    const writeBundles = await rollup({
        input: resolve(pkgRoot, 'index.js'), // 打包入口文件
        plugins: [
            vue({
                // 确保编译器支持 defineModel
                compilerOptions: {
                    isCustomElement: (tag) => tag.startsWith('ue-')
                }
            }),
            nodeResolve({ extensions: ['.mjs', '.js', '.json', '.ts', '.vue'] }),
            postcss({
                extract: resolve(outputUmd, 'index.css'),
                minimize: true,
                extensions: ['.css', '.scss']
            }),
            esbuild()
        ],
        external: ["vue"], // 排除vue
    })
    // 将打包后的代码写入到文件系统中
    writeBundles.write({
        /**
         * format可选值：
         * 'amd' - 异步模块定义，用于 RequireJS 等
            'cjs' - CommonJS，适用于 Node
            'es' / 'esm' - ES 模块（推荐用于现代浏览器）
            'iife' - 自执行函数，适合 <script> 标签
            'umd' - 通用模块定义，兼容 AMD 和 CommonJS
            'system' - SystemJS 加载器格式
         */
        format: 'umd', // 输出的模块格式。
        file: resolve(outputUmd, 'index.full.js'), // 打包生成的文件及其位置
        name: "UeUI", // 全局变量名称（format为iife或umd时）
        exports: 'auto',
        // 外部依赖的全局变量名
        globals: {
            vue: 'Vue'
        }
    }) // 配置输出文件格式，属性为output
}
umdBuildEntry()
