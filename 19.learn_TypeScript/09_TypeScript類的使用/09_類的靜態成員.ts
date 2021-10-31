// class Person {
//   name: string = ""
//   age: number = 12
// }

// const p = new Person()

// p.name = "wyatt"

class Student {
  static time: string = "20:00"

  static attendClass() {
    console.log("學習")
  }
}

console.log(Student.time)
Student.attendClass()

export {}