import {
  defineConfig
} from 'vite'
import vue from '@vitejs/plugin-vue'
import WindiCSS from 'vite-plugin-windicss'
//引入path
// import path from 'path'

// https://vitejs.dev/config/
//导出
export default defineConfig({
  // resolve: {
  //   alias: {
  //     '~': path.resolve(__dirname + '/src') // 根目录的路径到src
  //   }
  // },
  plugins: [vue(), WindiCSS()],
})