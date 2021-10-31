/*
  通過聯合類型有兩個缺點
  01. 進行很多邏輯判斷(類型縮小)
  02. 返回值的類型依然不能確定
*/

type AddType = number | string
function add(a1: AddType, a2: AddType) {
  if(typeof a1 ==="number" && typeof a2 === "number") {
    return a1 + a2
  } else if(typeof a1 ==="string" && typeof a2 === "string") {
    return a1 + a2
  }
}


add(10, 20);