function makeArea(shape: Shape) {
  return shape.getArea()
}


abstract class Shape {
  abstract getArea() 
}

class Rectangle extends Shape {
  private width: number
  private height: number

  constructor(width: number, height: number) {
    super()
    this.width = width
    this.height = height
  }

  getArea() {
    return this.width * this.height
  }
}

class Circle  extends Shape{
  private radius: number 
  constructor(r: number) {
    super()
    this.radius = r
  }

  getArea() {
    return this.radius * this.radius * 3.14
  }
}

const rectangle = new Rectangle(20, 30)
const circle = new Circle(10)

console.log(makeArea(rectangle));
console.log(makeArea(circle));
