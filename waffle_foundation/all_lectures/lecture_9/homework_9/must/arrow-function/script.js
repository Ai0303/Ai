'use strict'
// Please don't delete the 'use strict' line above
console.log("hello world!");

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
    * @param {number} ???
    * @returns {boolean} 与えられた数値が 10 の倍数かどうか
    */
   // ここにコードを書きましょう
   const isMultipleOfTen = ((number) => number % 10 === 0);
   const arrayOfNumbers = [2, 4, 6, 8, 10, 15, 20, 30, 66, 89, 100];
   const arrayOfNumbers2 = [20, 30, 66, 89, 100]

   test(arrayOfNumbers.filter(isMultipleOfTen), [10, 20, 30, 100]);
   test(arrayOfNumbers2.filter(isMultipleOfTen), [20, 30, 100]);

// 問題２
   /**
    * @param {string} ???
    * @returns {boolean} 与えられた文字列に母音 (a, e, i, o, u) が1つ以上含まれているか
    */
   // ここにコードを書きましょう
  //  const hasAVowel = word =>{
  //   if(word === word.includes('a') || word === word.includes('i') || word === word.includes('u') || word === word.includes('e') || word === word.includes('o')){
  //     return true;
  //   }else{
  //       return false;
  //     }
  //   }; 
  //*今回はhasAVowelがfilterをする対象ではなく条件を提示する方になっている。だから何と何がマッチすればの「何」という者が「この関数の引数」というように定まったいない限りこのやり方ではできない。どんな値が入っても良いような処理のみを書かなくてはいけない
  const owels = ["a", "i", "u", "e", "o"]
  const hasAVowel = string =>{
    for(const owel of owels){
      if (string.includes(owel)){
        console.log (owel)
        return true;
      }
    }
    return false;
    }
  
   const arrayOfStrings1 = ["bat", "ball", "tree", "cow", "bnm"];
   const arrayOfStrings2 = ["bhg", "waa", "cvb"];

   test(arrayOfStrings1.filter(hasAVowel), ["bat", "ball", "tree", "cow"]);
   test(arrayOfStrings2.filter(hasAVowel), ["waa"]);

// 問題３
   /**
    * @param {Array<number>} ???
    * @returns {Array<number>} 与えられた配列の中にある正の数のみを要素として持つ配列
    */
   // ここにコードを書きましょう
   function getPositiveNumbers(numbers){
    console.log(numbers)
    return numbers.filter(function isPositive(number){
      console.log(number)//→配列内のすべての要素に対して関数の処理を実行している。
      if (0 < number){
        return number;
      }
    })
   }
   
   test(getPositiveNumbers([1, 2, 3, 4, 5]), [1, 2, 3, 4, 5]);
   test(getPositiveNumbers([0, 1, 2, 3, 4, 5]), [1, 2, 3, 4, 5]);
   test(getPositiveNumbers([1, -2, 3, -4, 5]), [1, 3, 5]);
   test(getPositiveNumbers([-2, -4]), []);

// 問題4
function getPositiveNumbers2(numbers){
  return numbers.filter((number) => {
    if (0 < number){
      return number;
    }
  })
}

test(getPositiveNumbers2([1, 2, 3, 4, 5]), [1, 2, 3, 4, 5]);
test(getPositiveNumbers2([0, 1, 2, 3, 4, 5]), [1, 2, 3, 4, 5]);
test(getPositiveNumbers2([1, -2, 3, -4, 5]), [1, 3, 5]);
test(getPositiveNumbers2([-2, -4]), []);

//問題５
   /**
    * @param {Array<string>} ???
    * @returns {Array<string>} 与えられた配列の中にある、大文字で始まり、疑問符で終わる文字列のみを要素として持つ配列
    */
   // ここにコードを書きましょう

   const arrayOfStrings3 = [
    "Hi, there.",
    "What in the world?",
    "My name is JavaScript",
    "Do you want to know a secret?",
  ];
　function getQuestions (Array){
  return Array.filter ((sentence) => {
      if (sentence.charAt(0).match(/[A-Z]/g) && sentence.endsWith("?")){
      
        return sentence;
      }  
  })
}
//"endsWith("")"：("")の中に入った文字列かどうかを判断しTrue / Falseで返す。

  test(getQuestions(arrayOfStrings3), [
    "What in the world?",
    "Do you want to know a secret?",
  ]);
  test(getQuestions(arrayOfStrings3.slice(2)), [
    "Do you want to know a secret?",
  ]);