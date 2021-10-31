const info = {
  name: "wyatt",
  age: 23
}

info.name = "wayne";

type Method = 'GET' | 'POST'

function request(url:string, method: Method) {

}

//方法一
// type Request = {
//   url: string,
//   method: Method,
// }

// const options : Request = {
//   url: "https://www.hungchang.co/api",
//   method: "POST"
// }


//方法二:
// const options = {
//   url: "https://www.hungchang.co/api",
//   method: "POST"
// }


// request(options.url, options.method as Method)

// 方法三:
const options = {
  url: "https://www.hungchang.co/api",
  method: "POST"
} as const


request(options.url, options.method)



export {}