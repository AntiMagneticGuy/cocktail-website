import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    rollupOptions: {
      output: {
        chunkFileNames: '[name].js',
        entryFileNames: '[name].js',
        
        assetFileNames: ({name}) => {   
          if (/\.css$/.test(name ?? '')) {
              return '[name][extname]';   
          }
          // default value
          return 'assets/[name][extname]';
        },
      },
    }
  }
})

// module.exports = {
//     publicPath: ''
// }