function foo() {
  return "abc"
}

function bar() {
  return 123
}

// unknown類型只能賦值給any和unknown類型
// any類型可以賦值給任意類型
let flag = true;
let result: unknown //最好不要使用any
if (flag) {
  result = foo()
} else {
  result = bar()
}

// let message: string = result
// let num: number = result

export {}