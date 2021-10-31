// 當前foo函數， 再被其他地方調用時， 沒有做任何的參數校驗。
// 1> 沒有對物件類型進行校驗
// 2> 沒有對是否傳入參數進行校驗
// function foo(message) {
//   if(message) {
//     console.log(message.length)
//   }
// }

// foo("Hello World!");
// foo("HI");

// foo()

