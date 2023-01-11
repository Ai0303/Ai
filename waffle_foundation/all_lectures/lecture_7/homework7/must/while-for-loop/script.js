'use strict'
// Please don't delete the 'use strict' line above

function test(actual, expected) {
    if (JSON.stringify(actual) === JSON.stringify(expected)) {
      console.log("Yay! Test PASSED.");
    } else {
      console.error("Test FAILED. Keep trying!");
      console.log("    actual: ", actual);
      console.log("  expected: ", expected);
      console.trace();
    }
  }

  //1
  function sayHellos(n){
    for(let num = 0; num < n; num++){
        console.log("Hello!");  
    }
  }
  sayHellos(4);
  // "Hello!"
  // "Hello!"
  // "Hello!"
  // "Hello!"

  //2
  function countToTen(){
    for(let num = 1; num <= 10; num ++){
        console.log(num);
    }
  }

  countToTen();
  // 1
  // 2
  // 3
  // 4
  // 5
  // 6
  // 7
  // 8
  // 9
  // 10

//3
function counter(num) {   
    for (let i = 0; i < num; i++) {
      console.log(i); 
    }
  }
  counter(5);

//4
function printArray(Array){
    for(let component of Array){
        console.log(component);
    }
}

// 5
printArray([1,2,3,4,5]);

// 6
   /**
    * @param {number} start
    * @param {number} end
    * @returns {Array<number>} start 以上 end 以下のすべての整数を含む配列
    */
   // ここにコードを書きましょう
   
   function createRange(start, end){
    let Result = [];
    for(let r = start; r <= end; r++){
     Result.push(r);  
   }
   return Result;
}
   test(createRange(4, 6), [4, 5, 6]);
   test(createRange(10, 16), [10, 11, 12, 13, 14, 15, 16]);

// 7
function printCars() {
    const cars = ["Toyota", "Mazda", "Mercedes", "BMW", "Hyundai", "Volvo"];
    for (let i = 0; i < cars.length; i++) {
      console.log(cars[i]);
      }
  }
printCars();

// 8
const commands = ["Print me last", "Print me second", "Print me first"];

function decrement(list) {
  let i = list.length - 1;
  while ( i >= 0) {
    console.log(list[i]);
    i--;
  }
}
decrement(commands);
// "Print me first"
// "Print me second"
// "Print me last"

// 9
   /**
    * @param {Array<number>} ???
    * @param {Array<number>} ???
    * @returns {Array<number>} それぞれの配列の対応する要素の和からなる配列
    */
   // ここにコードを書きましょう
    function addTogether(Array1, Array2){
        const result = [];
        if (Array1.length >= Array2.length){
        for(let i = 0; i < Array2.length; i ++){
          result.push(Array1[i] + Array2[i]);
         }
        for(let i = Array2.length; i < Array1.length; i ++){
           result.push(Array1[i]);           
        }
        
      }
        else{
          for(let i = 0; i < Array1.length; i ++){
            result.push(Array1[i] + Array2[i]);
          }
          for(let i = Array1.length; i < Array2.length; i ++){
            result.push(Array2[i]);
          }
        }
        return result;
    }
   test(addTogether([1, 2, 3], [4, 5, 6]), [5, 7, 9]);
   test(addTogether([1, 2, 3], [7, 8, 9]), [8, 10, 12]);
   test(addTogether([1], [4, 5, 6]), [5, 5, 6]);

// ー－－応用問題ー－－
// 問題１
   /**
    * @param {Array<any>} ???
    * @returns {Array<any>} 重複していない値のみが入った配列
    */
   // ここにコードを書きましょう
  function unique(NumArray){
    
    }
      
      
    
     
   test(unique([1, 1, 1, 1, 1]), []);
   test(unique([1, 3, 4, 5, 2, 4]), [1, 3, 5, 2]);

// 問題２
   /**
    * @param {Array<any>} 数字の配列
    * @returns {number} 引数の配列の要素の合計値
    */
   // ここにコードを書きましょう
  function sum_arr(NumArray){
    let count = 0;
    for (let i = 0; i < NumArray.length; i++){
      count = count + NumArray[i];
    }
    return count;
  }
   test(sum_arr([1]), 1);
   test(sum_arr([1, 1, 1, 1, 1]), 5);
   test(sum_arr([1, 2, 3, 4, 5]), 15);
  
// 問題３
   /**
    * @param {...number} ???
    * @returns {number} 引数の合計値
    */
   // ここにコードを書きましょう
  function sum (...nums){
    let count = 0;
    console.log(...nums)
    for (const num of nums){
      count = count + num;
    }
    return count;
  }
   test(sum(1), 1);
   test(sum(1, 1, 1, 1, 1), 5);
   test(sum(1, 2, 3, 4, 5), 15);