function printMessageLength(message?: string) {
  // if(message) {
  //   console.log(message.length)
  // }
  console.log(message.length)
  // Vue3源碼
  console.log(message!.length)
}

printMessageLength("Hello World");
printMessageLength("哈哈哈哈")