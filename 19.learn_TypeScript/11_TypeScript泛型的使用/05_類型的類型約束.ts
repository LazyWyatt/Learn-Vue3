interface ILength {
  length: number
}

function getLength<T extends ILength>(arg: T) {
  return arg.length
}


getLength("123")
getLength(["123","321"])
getLength({length: 100})