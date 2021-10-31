class Person {
  name: string = ""
  age: number = 0
}

class Student  extends Person{
  sno: number = 0

  eating() {
    console.log("eating")
  }

  studying() {
    console.log("studying")
  }
}


class Teacher extends Person{
  name: string = ""
  age: number = 0
  title: string = ""

  eating() {
    console.log("eating")
  }

  teaching() {
    console.log("teaching")
  }
}

const stu = new Student()
stu.name = "wyatt";
stu.age = 23;
console.log(stu.name)
console.log(stu.age)
stu.eating()

export {}