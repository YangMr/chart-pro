import { fileURLToPath, URL } from 'node:url'
// import postCssPxToRem from 'postcss-pxtorem'

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
  css: {
    // postcss: {
    //   // 优点: 直接在项目中写px, 运行到浏览器的时候会自动转化为rem
    //   // 缺点: 在特殊情况下, 我们不想让某个字体的或者某个尺寸的大小转化rem
    //   plugins: [
    //     postCssPxToRem({
    //       rootValue: 192, // 1rem，根据 设计稿宽度/10 进行设置
    //       propList: ['*'] // 需要转换的属性，这里选择全部都进行转换
    //     })
    //   ]
    // }
  }

  // 1920  50px
})
