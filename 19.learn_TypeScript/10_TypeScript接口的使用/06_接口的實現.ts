interface ISwim {
  swimming: () => void
}

interface IEat {
  eating: () => void
}

// 類實現接口
class Animal {
  // constructor(parameters) {
    
  // }
}

// 繼承，只能單繼承
// 實現，實現接口，一個類可以實現多個接口

class Fish extends Animal implements ISwim, IEat{
  swimming() {
    console.log("Fish swimming")
  }

  eating() {
    console.log("Fish eating")
  }
}

// 編寫一些公共的API: 面相接口編程
function swimAction(swimable: ISwim) {
  swimable.swimming()
}

class Person implements ISwim {
  swimming() {

  }
}
// 1.所有實現了接口的類對應的對象，都是可以傳入的。
swimAction(new Fish())

swimAction(new Person())
swimAction({swimming:function() {}})
export {}