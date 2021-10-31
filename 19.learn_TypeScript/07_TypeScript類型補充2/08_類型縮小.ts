// 1.typeof的類型縮小
type IDType = number | string
function printID(id: number | string) {
  if (typeof id === 'string') {
    console.log(id.toUpperCase());
  } else {
    console.log(id)
  }
}


// 2.平等的類型縮小(=== == !== != switch)
type Direction = 'left' | 'right' | 'top' | 'bottom'
function printDirection(direction: Direction) {
  // if (direction === 'left') {
  //   console.log(direction)
  // } else if ()
  switch (direction) {
    case 'left':
      console.log('left')
      break;
    case 'right':
      console.log('right')
      break;
    case 'top':
      console.log('top')
      break;
    case 'bottom':
      console.log('bottom')
      break;
    default:
      break;
  }
}


// 3.instanceof

function printTime(time: string | Date) {
  if (time instanceof Date) {
    console.log(time.toUTCString())
  } else {
    console.log(time)
  }
}

class Student {
  studying() {}
}

class Teacher {
  teaching() {}
}

function work(p: Student | Teacher) {
  if(p instanceof Student) {
    p.studying()
  } else {
    p.teaching()
  }
}

// 4.in
type Fish = {
  swimming: () => void
}

type Dog = {
  running: () => void
}

function walk(animal: Fish | Dog) {
  if ('swimming' in animal) {
    animal.swimming();
  } else {
    animal.running();
  }
}

const fish: Fish = {
  swimming() {
    console.log("swimming");
  }
}

export {}