// 通過類型(type)別名來聲明對象類型
// type InfoType = {name: string, age: number}

// 另外一種方式聲名對象類型: 接口interface
// 在其中可以定義可選類型
// 也可以定義只讀屬性
interface IInfoType {
  name: string,
  age: number,
  friend? : {
    name: string
  }
}


const info: IInfoType = {
  name: "wyatt",
  age: 23
}