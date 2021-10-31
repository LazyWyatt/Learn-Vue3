class Person {
  public name: string = ""

  //封裝兩個方法, 通過方法來訪問name
  
  getName() {
    return this.name
  }

  setName(newName) {
    this.name = newName
  }
}

const p = new Person()
console.log(p.name)
console.log(p.getName())
p.setName("wyatt")

export {}
