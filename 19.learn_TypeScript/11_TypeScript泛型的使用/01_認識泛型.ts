// function sum (num1: number|string|any|{length: number} , num2: number|string|any[]|{length: number}) {
//   // return num1 + num2
// }

// sum(20, 30);
// sum(50, 60);

// 類型參數化
// 在定義這個函數時，不決定參數的類型。
// 而是讓調用者以參數的形式告知，此函數參數應該是甚麼類型
function sum<Type>(num1: Type): Type {
  return num1
}

// 1.明確膗入類型
sum<number>(20)
sum<{ name: string }>({ name: 'Wyatt' })
sum<any[]>(['abc'])

// 2.自動推導
sum(20)
