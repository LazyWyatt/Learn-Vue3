class Person {
  private _name: string
  constructor(name: string) {
    this._name = name
  }

  // 訪問器setter/getter
  // setter
  set name(newName) {
    this._name = newName
  }

  // getter
  get name() {
    return this._name
  }
}

const p = new Person("Wyatt");
p.name = "Lazy Wyatt"
console.log(p.name);