function foo(): never {
  //死循環
  while(true) {

  }
}

function bar(): never {
  throw new Error()
}

//適用場景
function handleMessage(message: string | number) {
  switch (typeof message) {
    case 'string':
      console.log("處理string的message");
      break;
    case 'number':
      console.log("處理number的message");
      break;
    default:
      const check: never = message;
  }
}
handleMessage("abc");
handleMessage(123);


// handleMessage(true);


export {}