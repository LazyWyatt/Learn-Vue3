# Computed

- 類型{[key:string]:Function | {get:Function,set:Function}}

## 模板語法

缺點:

- 存在大量邏輯在模板裡難以維護
- 當有多次一樣的邏輯時, 存在重複的代碼
- 多次使用的時候，很多運算也要多次執行，沒有緩存。
