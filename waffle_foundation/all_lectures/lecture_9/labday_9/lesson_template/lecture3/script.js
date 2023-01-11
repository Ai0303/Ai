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
/**
    * @param {Array<number>} ???
    * @returns {Array<string>} 与えられた配列の中にある、数字それぞれに20点追加した点数の配列。ただし、最大100点とし、20点加点した結果、100点を越える場合は、その要素は100
    */
   // ここにコードを書きましょう
   

// インプット　dataという配列
// アウトプット　各要素に1を加算した結果の配列　
//[2, 3, 4, 5]

//for loop で実装
// function addOne(numbers){
//   //ここにコードを書く
//   let result = []; 
//   for (const number of numbers){
//     result.push(number + 1); 
//   }
//   return result; 
// }

//mapを使って実装してみる
function giveBonusPoints(numbers){
  return numbers.map(function (num){ // mapの中でコールバック関数を使う
    if (num < 80){
        return num + 20;
    }
    else{return 100}  
  })
}



// numbers.map(num => {}
   
   const points = [10, 60, 20];
   const points2 = [10, 90, 85];

   test(giveBonusPoints(points), [30, 80, 40]);
   test(giveBonusPoints(points2), [30, 100, 100]);

    /**
    * @param {Array<string>} ???
    * @returns {Array<string>} 与えられた配列の中にある、文字列の長さが7以上の文字列のみを要素として持つ配列
    */
   // ここにコードを書きましょう
   const arrayOfStrings = ["SNAKE", "APPLES", "Peaches", "PUMPKINPIES"];
   function getLongWords(words){
    return words.filter(function (word){
        return word.length >= 7;
        
   })
}

   test(getLongWords(arrayOfStrings), ["Peaches", "PUMPKINPIES"]);