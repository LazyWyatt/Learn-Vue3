// 必傳 -> 有參數 -> 可選
function foo(x: number, y: number = 100) {
  console.log(x, y)
}

foo(20);

foo(20, undefined);

export {}