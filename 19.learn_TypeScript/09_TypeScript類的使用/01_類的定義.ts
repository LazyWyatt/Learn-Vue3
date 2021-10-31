class Person {
  name: string = ""
  age: number = 0

  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }
  eating() {
    console.log(this.name + " eating");
  }
}

const p = new Person("wyatt", 23)
console.log(p.name)
console.log(p.age)
p.eating()

export {}