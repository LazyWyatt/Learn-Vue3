// 1.函數作為參數時，再參數中如何編寫類型
function foo() {
  
}

type FooFnType = () => void
function bar(fn: FooFnType) {
  fn()
}

bar(foo)

// 2.定異常量時，編寫函數的類型
type AddFnType = (num1:number, num2:number) =>  number
const add: AddFnType = (a1: number, a2: number) => {
  return a1 + a2
}

export {}