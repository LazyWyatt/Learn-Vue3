// this可以被推倒出來的(TypeScript推導出來)

const info = {
  name: "wyatt",
  eating() {
    console.log(this.name + " eating");
  }
}

info.eating()

export {
}