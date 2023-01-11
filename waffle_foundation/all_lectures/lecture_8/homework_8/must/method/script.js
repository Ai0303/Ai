"use strict";
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
//残余引数　...(Value）
//問題１
    /**
        * @param {...string} 引数の数は未知数. 複数の名前(文字列)が渡される
        * @returns {Array<string>} "Hello, 名前" という挨拶の文字列を作成し、渡された全員分の挨拶を格納した配列
        *
        */
    function helloEveryone(...string){
      const ReturnArr = [];
      const GetStringArr = [];
      console.log(...string)
      GetStringArr.push(...string)
      if(GetStringArr.length > 0){
        for(let i = 0; i < GetStringArr.length; i ++){
          ReturnArr.push("Hello, " +  GetStringArr[i]);
        }
      }
      return ReturnArr;
    }
  

    test(helloEveryone("Waffle", "Choco"), ["Hello, Waffle", "Hello, Choco"])
    test(helloEveryone(), [])

//問題２
    /**
        * @param {...number} 引数の数は未知数. 複数の数字が渡される
        * @returns {nummber} 与えられた数字の平均を計算し、返す
        *
        */
    function calcAverage(...nums){
      let Sum = 0;
      for(const num of nums){
        Sum = (Sum + num) 
      }
      return Sum / nums.length
    }

    test(calcAverage(1,2,3), 2)
    test(calcAverage(11,35,14, 20), 20)

//method
//問題１
const myMathObject = {
  sum: function (...nums) {
    let Sum = 0;
    for (const num of nums){
      Sum = Sum + num
    }
    return Sum;
  },
  product: function (...nums) {
    let Sum = 1;
    for (const num of nums){
      Sum = Sum * num;
    }
    return Sum
  },
  isEven: function (num) {
      if(num % 2 === 0){
        return true;
      }
      return false;
    },
  //追加：問題３
  getNumbers: function (...values) {
    let NumArr = [];
    for (const value of values){
      if (typeof(value)==="number"){
        NumArr.push(value);
      }
    }
    return NumArr;
  },
  //追加：問題４
  abs: function (...nums){
    for (const num of nums){
      if (num < 0){
        return -num;
      }else{
        return num;
      }
    }
  }

  };
     // これらはテストのサンプルです。下の問題は自分でテストを考えましょう。
     test(myMathObject.sum(1), 1);
     test(myMathObject.sum(1, 2, 3), 6);
     test(myMathObject.product(3,3,5), 45);
     test(myMathObject.isEven(4), true);
     test(myMathObject.isEven(3), false);

//問題２
console.log(myMathObject.sum(19283, 18475, 199999));
console.log(myMathObject.product(19283, 18475, 199999));
console.log(myMathObject.isEven(19));

//問題３
   /**
    * @param {...any} ??? - 任意の数の引数
    * @returns {Array<number>} 引数のうち、数値型のものだけを要素に持つ配列。要素の順番は引数で与えられた順番にする。
    */
   //問題１のmyMathObjectに回答を追加している。
  
   test(myMathObject.getNumbers(1, 2, 3, 4), [1, 2, 3, 4]);
   test(myMathObject.getNumbers("foo", 3, "4", "hi", 1), [3, 1]);

//問題４
   /**
    * @param {number} ???
    * @returns {number} 与えられた数字の絶対値
    */
   //問題１のmyMathObjectに回答を追加している。
   test(myMathObject.abs(1), 1);
   test(myMathObject.abs(-1), 1);
   test(myMathObject.abs(435678.745389), 435678.745389);
   test(myMathObject.abs(-675843.753489), 675843.753489);