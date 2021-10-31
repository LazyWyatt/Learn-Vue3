const el = document.getElementById("wyatt") as HTMLImageElement

el.src = "url地址"

class Person {

}

class Student extends Person {
  studying() {

  }
}

function sayHello(p: Person) {
  (p as Student).studying()
}

const student1 = new Student;

sayHello(student1)

export {}


// 3.不要這樣使用
const message = "Hello World";
const num: number = message as any as number
const num2: number = (message as unknown) as number