/*
函數的重載: 名稱相同，但是參數不同的幾個函數，就是函數重載
*/

import { minify } from "html-minifier-terser";

// function add(num1: number, num2: number) {}
// function add(num1: number, num2: number, num3: number) {}


function add(num1:number, num2: number):number; //沒函數體，沒有實現
function add(num1:string, num2: string):string; //沒函數體，沒有實現


function add(num1: any, num2: any): any {
  if (typeof num1 === 'string' && num2 === 'string') {
    return num1.length + num2.length
  }
  return num1 + num2
}

const result = add(20, 30);
const result2 = add("20" , "30");
console.log(result)
console.log(result2)

// 在函數的重載中，實現函數是不能直接被調用的
// add({name: "wyatt"}, {age: 23})
export {}