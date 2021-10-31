// 讓一個參數本身是可選的
// 一個參數是一個可選類型的時候， 它類似於這個參數是: 類型| undefined的聯合類型

// function foo(message?: string) {
//   console.log(message)
// }

function foo(message: string|undefined) {
  console.log(message)
}

foo("123");
export {}