'use strict'
// Please don't delete the 'use strict' line above
console.log("hello world!");

// 1
   /**
    * @param {Array<number>} ??? - 数値型の要素を持つ配列

    * @returns {number} 与えられた配列のすべての数字の合計
    */
    // function sumArray(Array) {
    //     // ここにコードを書きましょう。
    //     const result = [];
    //     for (const i = 0, len = Array.length; i < len; i++) result += Array[i];    
    //     return result;
    //      }
    
    function test(actual, expected){
      if (actual === expected) {
      console.log("Test PASSED.");
      } else {
      console.error("Test FAILED. Keep trying!");
      console.group("Result:");
      console.log("  actual:", actual);
      console.log("expected:", expected);
      console.groupEnd();
      } 
     }
  // test(sumArray([1, 2, 3, 4]), 10);
     
      // さらにテストを書きましょう。
  
  // 2
     /**
      * @param {Array<number>} ??? - 数値型の要素を持つ配列
  
      * @returns {number} 与えられた配列のすべての数字をかけあわせた答え
      */
      // function productArray(Array) 
      //     // ここにコードを書きましょう。
          
     
      //   actual = productArray([1, 2, 3, 4]);
      //   expected = 24;
     
      //   if (actual === expected) {
      //     console.log("Test PASSED.");
      //   } else {
      //     console.error("Test FAILED. Keep trying!");
      //     console.group("Result:");
      //     console.log("  actual:", actual);
      //     console.log("expected:", expected);
      //     console.groupEnd();
      //   }
     
        // さらにテストを書きましょう。
  
  // 3
       /**
      * @param {Array<any>} ???
      * @returns {boolean} 与えられた配列に "fun" という文字列が入っているかどうかを表すブーリアン
      */
        function hasFun(Array3) {
          // ここにコードを書きましょう。
          if (Array3.includes("fun")){
              return true;
          }else{
              return false;
          }
        }
     
        test(hasFun(["whatever", 2, false, "fun", "hello"]), true);
        test(hasFun(["whatever", 2, false, "run", "hello"]), false);
        
       
     
        // さらにテストを書きましょう。
  
  // 4
     /**
      * @param {Array<any>} ???
      * @returns {boolean} 与えられた配列の要素がすべてブーリアンかどうかを表すブーリアン
      */
      function containsOnlyBooleans(Array4) {
          // ここにコードを書きましょう。
          if (Array4===typeof true){
            return true;
          }else{
            return false;
          }
        }
     
        actual = containsOnlyBooleans([true, false, true, false, false]);
        expected = true;
     
      
     
        actual = containsOnlyBooleans([true, true, true, "not a boolean"]);
        expected = false;
     
       
     
        // さらにテストを書きましょう。