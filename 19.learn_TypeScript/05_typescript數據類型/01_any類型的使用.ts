// 當進行一些類型的斷言 as any
// 在不想給某些javascript添加具體的數據類型的時候(和原生JS一樣)
let message: any = "Hello World";
message = 123;
message = true;
message = {

}

message();
message.split("")
console.log(message)

// const arr: any[] = [] //不推薦

export {}