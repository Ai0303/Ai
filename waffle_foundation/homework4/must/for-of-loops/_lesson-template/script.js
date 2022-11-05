'use strict'
// Please don't delete the 'use strict' line above
console.log("hello world!");

// 1
   /**
    * @param {Array<number>} ??? - 数値型の要素を持つ配列

    * @returns {number} 与えられた配列のすべての数字の合計
    */
    function sumArray(Array) {
        // ここにコードを書きましょう。
        let result = 0;
        for (const number of Array){
         result = result += number;  
        }  
        return result;
         }
    
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
    test(sumArray([1, 2, 3, 4]), 10);
     
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
     
        test(containsOnlyBooleans([true, false, true, false, false]), true);
        test(containsOnlyBooleans([true, true, true, "not a boolean"]), false);
       
     
        // さらにテストを書きましょう。

  // 5
     /**
    * @param {Array<any>} ??? - 1番目の配列
    * @param {Array<any>} ??? - 2番目の配列
    * @returns {Array<any>} 与えられた2つの配列を連結させた配列
    */
      function concatenate(Array5, Array6) {
        // ここにコードを書きましょう。
        const Array7 = [];
       
      }
   
     
      // 現時点では、配列を比較するには JSON.stringify を使う必要があると覚えておいてください。
      function test1(actual, expected){
      if (JSON.stringify(actual) === JSON.stringify(expected)) {
        console.log("Test PASSED.");
      } else {
        console.error("Test FAILED. Keep trying!");
        console.group("Result:");
        console.log("  actual:", actual);
        console.log("expected:", expected);
        console.groupEnd();
      }
      }
      test1(concatenate(["eeny", "meeny"], ["miny", "moe"]), concatenate(["eeny", "meeny"], ["miny", "moe"]));
      
      // さらにテストを書きましょう。

  // 6
     /**
    * @param {Array<number>} ??? - 数値型の要素を持つ配列

    * @returns {Array<number>} 与えられた配列の中の偶数だけを入れた配列
    */
      function getEvenNumbers() {
        // ここにコードを書きましょう。
      }
   
      actual = getEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8]);
      expected = [2, 4, 6, 8];

  // 7
     /**
    * @param {Array<number>} ??? - 数値型の要素を持つ配列

    * @param {number} ??? - 配列の中の数字にかける数字
    * @returns {Array<number>} 配列の中の数字に第2引数をかけた結果が入った新しい配列
    */
      function getMultipliedArray() {
        // ここにコードを書きましょう。
      }
   
      actual = getMultipliedArray([1, 2, 3], 6);
      expected = [6, 12, 18];