class Person {
  // 1.只讀屬性是可以在構造器中賦值，賦值之後就不能修改了。
  // 2.屬性本身不能進行修改，但是如果他是對象類型。對象中的屬性可以修改
  readonly name: string 
  readonly friend?: Person
  age?: number
  constructor(name: string, friend?: Person) {
    this.name = name
    this.friend = friend
  }
}

const p = new Person("wyatt", new Person("kobe"));
console.log(p.name)
console.log(p.friend)
// p.name = "123";
//不可以直接修改friend
// p.friend = new Person("Kuang");
if(p.friend) {
  p.friend.age = 30;
}
export {}