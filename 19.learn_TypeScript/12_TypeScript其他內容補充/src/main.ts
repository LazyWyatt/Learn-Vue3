import {add, sub} from './utils/math';
import { time, price } from './utils/format'

import axios from 'axios';
import _ from 'lodash'

import goodImage from './img/seemsgood.png'

console.log(add(20, 30))
console.log(sub(20, 30))

console.log(time.format("2020"))
console.log(price.format(123))

console.log(_.join(['abc', 'cba']))

// axios.get("http://123.207.32.32:8000/home/multidata").then(res => {
//   console.log(res);
// })

//類型的查找
/*
  .d.ts 它是用來聲明類型的文件。僅僅用來做類型檢測，告訴typescript有哪些類型

  1.內置類型聲明: 
    document.getElementById
  2.外部定義類型聲明
    兩種聲明方式 
    01. 編寫.d.ts
    02. DefinitelyTyped，上TypeScript官網搜尋

  3.自行定義類型聲明
*/

console.log(wyattName);
console.log(wyattAge);

wyattFoo()

const p = new Person("wyatt", 23)
console.log(p)