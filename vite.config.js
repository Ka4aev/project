import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: 'dist', // директория сборки
    assetsDir: 'assets', // директория для ресурсов
  },
  plugins: [
    vue(),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '~fonts': fileURLToPath(new URL('./public/fonts', import.meta.url)),
    }
  },
  css:{
    preprocessorOptions: {
      scss: {
        additionalData: "@import '/src/assets/scss/index.scss';"
      }
    }
  }
})
