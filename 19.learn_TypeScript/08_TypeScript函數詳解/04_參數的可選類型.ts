// 可選類型必須寫在必選類型後面
// y -> undefined | number
function foo(x: number, y?: number) {

}

foo(20, 30)
foo(20, undefined)

export {}