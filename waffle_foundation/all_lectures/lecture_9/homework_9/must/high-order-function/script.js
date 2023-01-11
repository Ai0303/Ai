'use strict'

// const { METHODS } = require("http");

// Please don't delete the 'use strict' line above

function test(actual, expected) {
    if (JSON.stringify(actual) === JSON.stringify(expected)) {
      console.log("Yay! Test PASSED.");
    } else {
      console.error("Test FAILED. Keep trying!");
      console.group("Result:");
      console.log("  actual:", actual);
      console.log("expected:", expected);
      console.trace();
      console.groupEnd();
    }
  }
// 問題１
     /**
    * @param {string} ???
    * @returns {string} 与えられた引数に挨拶文を追加した文字列
    */
   // ここにコードを書きましょう
 const getGreeting = (string =>{
 return "Hello, " + string + ".";
})
   test(["zeno", "yanis", "xander"].map(getGreeting), [
    "Hello, zeno.",
    "Hello, yanis.",
    "Hello, xander.",
  ]);

  // もう一つ、テストを追加してみましょう
 test(["Ai", "cat", "dog"].map(getGreeting), ["Hello, Ai.", "Hello, cat.", "Hello, dog.",
  ]);
// 問題２
     /**
    * @param {number} ???
    * @returns {number} 与えられた引数の絶対値
    */
   // ここにコードを書きましょう
  
  const abs = ((number) => {
    if (number < 0){
      return -number;
    }else{
      return number
    }
  });
  
  
   test([1, 2, 3].map(abs), [1, 2, 3]);
   test([-1, -2, -3].map(abs), [1, 2, 3]);
   test([-1, 2, -3].map(abs), [1, 2, 3]);

// 問題３
 /**
    * @param {Array<number|string>} ???
    * @returns {Array<number|string>} 与えられた配列の各要素が数値型なら文字列型に、文字列型なら数値型に変換したものが入った、新しい配列
    */
   // ここにコードを書きましょう]
   function getSwitched (Types){
    const firstArray = Types.map (function (element){
      if (typeof(element) === "number"){
        return String(element);
      }
      else{
        return Number(element);
      }
    })
    return firstArray;//これは、getSwitchedがfirstArrayを返す関数！
   } 
    
    
      
   test(getSwitched([1, 2, 3]), ["1", "2", "3"]);
   test(getSwitched(["1", "2", "3"]), [1, 2, 3]);
   test(getSwitched(["1", 2, "3"]), [1, "2", 3]);
