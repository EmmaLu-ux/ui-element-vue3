import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { createStyleImportPlugin } from "vite-plugin-style-import"

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(),
  createStyleImportPlugin({
    libs: [
      {
        libraryName: "flori-ui",
        esModule: true,
        resolveStyle: (name) => {
          const path = name.split('-') // ue-button
          return `flori-ui/es/components/${path[1]}/src/style/index`
        }
      }
    ]
  })
  ],
})
