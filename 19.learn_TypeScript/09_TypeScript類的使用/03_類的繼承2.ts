class Person {
  name: string = ""
  age: number = 0

  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }

  eating() {
    console.log("eating")
  }
}

class Student  extends Person{
  sno: number

  constructor(name: string, age: number, sno:number) {
    //super 調用父類的構造器
    super(name, age)
    this.sno = sno
  }

  //overwrite
  eating() {
    super.eating()
    console.log("student eating")
  }

  studying() {
    console.log("studying")
  }
}


const stu = new Student("wyatt", 23, 111)
console.log(stu.name)
console.log(stu.age)
console.log(stu.sno)
stu.eating()

export {}

