type ThisType = {name: string}

function eating(this: ThisType, message?: string) {
  console.log(this.name + " eating", message);
}
const info = {
  name: "wyatt",
  eating: eating
}

info.eating("哈哈哈")

eating.call({name: "Kuang"}, "哈哈哈");
eating.apply({name: "Nai"}, ["嘿嘿嘿"]);
export {}