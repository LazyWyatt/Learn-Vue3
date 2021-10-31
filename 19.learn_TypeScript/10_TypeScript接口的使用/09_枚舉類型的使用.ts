// type Direction = "left" | "right" | "Top" | "Bottom"


enum Direction {
  LEFT,
  RIGHT,
  TOP,
  BOTTOM
}


function turnDirection(direction: Direction) {
  console.log(direction)
  switch (direction) {
    case Direction.LEFT:
      console.log("往左")
      break;
    case Direction.RIGHT:
      console.log("往右")
      break;
    case Direction.TOP:
      console.log("往上")
      break;
    case Direction.BOTTOM:
      console.log("往下")
      break;
    default: 
     const foo: never = direction;
      break;
  }
}

turnDirection(Direction.LEFT)
turnDirection(Direction.RIGHT)
turnDirection(Direction.TOP)
turnDirection(Direction.BOTTOM)


export {}