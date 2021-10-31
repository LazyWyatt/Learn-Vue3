interface IPerson {
  name: string
  age: number
  height: number
}

const info = {
  name: "wyatt",
  age: 23,
  height: 1.65,
  address: "台北"
}


// freshness擦除
// 類型檢測時將多出來的擦除掉，依然符合的就會通過編譯
const p: IPerson = info 


console.log(p);


function printInfo(person: IPerson) {
  console.log(person);
}

// 這個會報錯
// printInfo({
//   name: "wyatt",
//   age: 23,
//   height: 1.65,
//   address: "台北"
// })

const info2 = {
  name: "wyatt",
  age: 23,
  height: 1.65,
  address: "台北"
}

printInfo (info2)

