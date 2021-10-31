# 認識 webpack

- 前端越來越複雜
  - 模塊化的方式
  - 高級的特性來加速開發效率和安全性，比如說通過 ES6+、TypeScript 開發腳本邏輯。
  - 通過 sass、less 來編寫 css 樣式代碼。
  - 開發過程中，希望邊監聽文件的變化來反映到瀏覽器上
  - 將程式進行壓縮、合併以及其他相關的優化。
- webpack is a static module bundler for modern Javascript applications.
  - 打包: webpack 可幫助我們進行打包，所以是一個打包工具
  - 靜態的: 最終將程式打包成靜態資源(部屬到靜態服務器)
  - 模塊化: webpack 支持各種模塊開發，ES Module、CommonJS、AMD
  - 現代的: 前端越來越複雜
cjs -> CommonJS
hbs -> 一種模板引擎
01. JS打包
  - 將ES6 轉成 ES5
  - TypeScript的處理轉換成Javascript
02. CSS處理
  - CSS模塊的加載、提取;
  - Less和Sass等處理器的處理
03. 資源文件img、font
  - 圖片img文件的加載
  - 字體font文件的加載
04. HTML資源文件
05. 處理vue項目的sfc文件的.vue文件