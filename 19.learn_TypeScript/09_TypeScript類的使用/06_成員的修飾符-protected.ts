// protected: 在類內部和子類中可以訪問

class Person {
  protected name: string = "123"
}


//子類可以訪問父類
class Student extends Person {
  getName() {
    return this.name
  }
}

const stu = new Student()

console.log(stu.getName())

export {}
