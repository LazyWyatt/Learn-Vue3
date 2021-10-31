// "Hello World" 也可以作為類型的， 叫做字面量類型
const message: "Hello World" = "Hello World";

let num: 123 = 123


export {}

//字面量類型的意義， 就是必須結合聯合類型
// let align: 'left' | 'right' | 'center' = 'left';
// align = 'right';
// align = 'center';


//可以寫成這樣
type Alignment = 'left' | 'right' | 'center';
let align: Alignment = 'left'
align = 'right';
align = 'center';