'use strict'
// Please don't delete the 'use strict' line above

// 1
// let index = 0;

//    while (index <= 4) {
//      console.log("hello!");
//      index++;
//    }

   for(let i = 0; i <= 4; i ++){
    console.log("hello!");
   }

// // 2
const array = ["a", "b", "c", "d","e"];
   for (let i = 0; i <= array.length-1; i++) {
     console.log("Value:" + array[i] + " Index" + i);
   }
//    Value: a Index: 0
//    Value: b Index: 1
//    Value: c Index: 2
//    Value: d Index: 3
//    Value: e Index: 4

//  3
function sayFourHellos(){
    for(let i = 1; i <= 4; i ++){
        console.log("Hello!");
    }
}
sayFourHellos();
   // "Hello!"
   // "Hello!"
   // "Hello!"
   // "Hello!"

// 4
function countDown(start){
    for(let i = start; i >= 0; i --){
        console.log(i);
    }
}
countDown(3);

// 5
/**
    * @param {Array<number>} ???
    * @returns {Array<number>} 与えられた配列の要素にそれぞれ 1 を加えた数字を要素として持つ配列
   // ここにコードを書きましょう
  
   const array1 = [1, 2, 3, 4];
   // function が動作するかテストする
   test(addOne(array1), [2, 3, 4, 5]);
   // 元の配列が変更されていないことを確認する
   test(array1, [1, 2, 3, 4]);
**/
function addOne(Array){
    Array = [];
    for (let i = 0; i <= Array.length - 1; i ++){
        Array.push
    }
}