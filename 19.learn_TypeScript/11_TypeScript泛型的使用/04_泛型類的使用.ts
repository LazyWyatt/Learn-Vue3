class Point<T> {
  x: T
  y: T
  z: T

  constructor(x: T, y: T, z: T) {
    this.x = x;
    this.y = y;
    this.z = z;
  }
}

const p = new Point("1", "5", "254")
const p1 = new Point<string>("1", "5", "254")
const p2:Point<string> = new Point("1", "5", "254")


const names: string[] = ["abc","csa","bbb"]
const names2: Array<string> = ["abc","csa","bbb"]


export{}