//聲明模塊
declare module 'lodash' {
  export function join(arr: any[]): void
}


// 聲明變量/函數/類
declare let wyattName: string
declare let wyattAge: number


declare function wyattFoo(): void


declare class Person {
  name: string
  age: number
  constructor(name: string, age: number)
}


// 聲明文件

declare module '*.jpg'
declare module '*.png'

// declare module '*.vue' {
//   import { DefineComponent } from 'vue';
//   const component: DefineComponent({
//     export
//   })
// }

//聲明命名空間
declare namespace ${
  export function ajax(settings: any): any
}