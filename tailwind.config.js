/** @type {import('tailwindcss').Config} */
// const colors = require('tailwindcss/colors')

module.exports = {
  darkMode: ["class"],
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  plugins: [
    require('tailwindcss-rtl'),
  ],
  theme: {
    extend: {
      // fontSize: { // 这个配置不加，用于开发时查看
      //   // 自定义字体大小
      //   'xs': '0.75rem',    // 12px
      //   'sm': '0.875rem',   // 14px
      //   'base': '1rem',     // 16px
      //   'lg': '1.125rem',   // 18px
      //   'xl': '1.25rem',    // 20px
      //   '2xl': '1.5rem',    // 24px
      //   '3xl': '1.875rem',  // 30px
      //   '4xl': '2.25rem',   // 36px
      //   '5xl': '3rem',      // 48px
      // },
      height: { // h-formEl
        formEl: '2.5rem' // btn、input等高度40px
      },
      spacing: { // mt-small p-normal 
        small: '0.5rem', // 8px 
        normal: '0.75rem', // 12px 
        large: '1.25rem', // 20px 
        '10p': '10%', // 10% 
      },
      borderRadius : { //  rounded-btn
        btn: '0.5rem', // 按钮圆角 8px
      },
      colors: {
        fontColor: '#808080', // 灰色常用字
        borderColor: '#E7E7E7', // 线框描边色
        boxBgColor: '#F6F6F6', // 灰色字底框色
        menuColor: {
          deepen: '#D3D3D3', // 菜单栏 按钮颜色
          normal: '#E6E7EA', // 菜单栏 选中颜色
          light: '#F1F2F5', // 菜单栏 hover item颜色
          bg: '#FBFCFF' // 菜单栏 背景色
        },
        hoverColor: {
          deepen: '#DBE6FF', // 表格 按钮颜色
          normal: '#EFF4FF', // 表格 选中颜色
          light: '#F9FAFF' // 表格 hover item颜色
        },
        mainColor: {
          900: '#3470FF', // 蓝色文字
          600: '#E1EAFF', // 蓝色字底色
          300: '#F5F8FF' // 蓝色框底色
        },
        subColor: {
          normal: '#EA6A6A', // 红色文字
          light: '#FCE9E9' // 红色字底色
        },
        thirdColor: '#5EB972', // 绿色文字
        fourthColor: '#EAB86A' // 黄色文字
      }
    }
  }
}
