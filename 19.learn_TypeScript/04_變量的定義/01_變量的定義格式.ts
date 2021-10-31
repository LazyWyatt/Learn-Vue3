// 1.類型註解
// 2.var/let/const
// 3.String和string的差別
var name: string = "wyatt";
let age: number = 23;
const height: number = 1.88;

// string: TypeScript中的字符串類型
// String: Javascript的字符串包裝類的類型
const message: string = "Hello world";

//默認情況下進行賦值， 會將賦值的類型， 作為前面標識符的類型
// foo沒有添加類型註解，因為ts會推斷類型
let foo = "foo"


export {}