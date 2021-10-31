class Animal {
  action() {
    console.log("animal running")
  }
}

//父類引用(類型)指向子類的對象
class Dog extends Animal {
  action() {
    console.log("dog running");
  }
}

class Fish extends Animal {
  action() {
    console.log("fish swimming")
  }
}

// animal: dog/fish
// 看起來是相同類型，但是真正執行方法的時候型態不一樣
// 多態的目的是為了可以寫出更加具備通用性的代碼。
function makeActions(animals: Animal[]) {
  animals.forEach(animal => {
    animal.action()
  })
}

makeActions([new Dog(), new Fish()])