// 確定一個事實: names是一個陣列類別， 但是數組存放的是什麼類型的元素?
// 陣列裡面存放不同的類型是不好的習慣
// 類型註解 type annotation
const name: Array<string> = [] //不推薦
const name2: string[] = [] //推薦
// name.push(123);
// name.push("abc");

export{}