import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  define: {
    'process.env': {},
  },
  resolve: {
    alias: {
      'ycit-ui': './dist/es/index.esm.js'
    }
  },
  build:{
    outDir:'dist',
    minify:'esbuild',
    lib:{
      name: 'ycit-ui',
      entry:'src/view/index.js',
    },
    rollupOptions:{
      external:['vue'],
      output: [
        {
          manualChunks (id) {
            if(id.includes('view')&&id.includes('.vue')){
              return id.toString().split('view/')[1].split('/')[0].toString()
            }
            if(id.includes('node_modules')){
              return 'echarts'
            }
          },
          assetFileNames: 'assets/[name].[ext]',
          chunkFileNames: 'view/[name].js',
          format: 'cjs',
          dir: 'dist/cjs',
          entryFileNames: 'index.cjs.js',
          exports: 'named'
        },
        {
          // 最小化拆分包
          manualChunks (id) {
            if(id.includes('view')&&id.includes('.vue')){
              return id.toString().split('view/')[1].split('/')[0].toString()
            }
            if(id.includes('node_modules')){
              return 'echarts'
            }
          },
          assetFileNames: 'assets/[name].[ext]',
          chunkFileNames: 'view/[name].js',
          format: 'es',
          dir: 'dist/es',
          entryFileNames: 'index.esm.js',
          exports: 'named'
        },
        {
          format: 'umd',
          dir: 'dist/umd',
          entryFileNames:'ycit-ui.umd.min.js',
          name: 'YCIT',
          globals: {
            vue: 'Vue', // 这里指定 Vue 库在全局对象上的名称
          },
        }
      ]
    }
  },
})
