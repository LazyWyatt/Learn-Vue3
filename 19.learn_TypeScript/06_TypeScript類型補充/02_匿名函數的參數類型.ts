// 通常情況下, 在定義一個函數時， 都匯給參數加上類型註釋的。
function foo(message: string) {

}

const names: string[] = ['aaa', 'bbb', 'ccc'];
// item 根據上下文的環境推導出來的， 這個時候可以不添加類型註解
// 上下文中的函數: 可以不添加類型註解
names.forEach((item) => {
  console.log(item.split(""))
})
export {}