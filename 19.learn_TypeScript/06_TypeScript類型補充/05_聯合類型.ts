function printID(id: number|string|boolean) {
  // 使用聯合類型的值時，要特別小心。
  // narrow
  if(typeof id === 'string') {
    console.log(id.toUpperCase())
  } else {
    console.log(id)
  }
}

printID(123);
printID("abc") 