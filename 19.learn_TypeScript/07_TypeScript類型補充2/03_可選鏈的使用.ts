type Person = {
  name: string
  friend?: {
    name: string
    age?: number,
    // girlFriend?: {

    // }
  }
}

const info: Person = {
  name: "Wyatt",
  friend: {
    name: "Kuang"
  }
}




console.log(info.name);
// console.log(info.friend!.name);
console.log(info.friend?.name);
console.log(info.friend?.age);


// if(info.friend) {
//   console.log(info.friend.name)

//   if (info.friend.age) {
//     console.log(info.friend.age)
//   }
// }