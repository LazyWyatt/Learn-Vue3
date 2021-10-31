// 一般組合類型的方式: 聯合類型
type WyattType = number | string
type Direction = "left" | "right" | "center"

// 另一種組合類型的方式: 交叉類型

type AType = number & string

interface ISwim {
  swimming: () => void
}

interface IFly {
  flying: () => void
}

type MyType1 = ISwim | IFly
type MyType2 = ISwim & IFly

const obj1: MyType1 = {
  flying() {
    
  }
}


const obj2: MyType2 = {
  flying() {

  },
  swimming() {
    
  }
}

export {}