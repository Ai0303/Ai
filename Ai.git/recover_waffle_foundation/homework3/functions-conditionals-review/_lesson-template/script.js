'use strict'
// Please don't delete the 'use strict' line above
console.log("hello world!");

   // ファイル全体で使用する TDD 用の変数を宣言する
   let expected;
   let actual;

    // 上の問題のように、関数testにチェックする内容を全てまとめる
   function test(actualExpression, expectedExpression){
       if (actualExpression === expectedExpression) {
           console.log("Yay! Test PASSED.");
       } else {
           console.error("Test FAILED. Keep trying!");
           console.log("    actual: ", actualExpression);
           console.log("  expected: ", expectedExpression);
       }
   }

   actual = /* テストを行う EXPRESSION（式）を定義する */
   expected = /* EXPRESSION（式）の期待値を定義する */

   // testを呼び出す
   test(actual, expected)

//1
   /**
    * 引数①: {string} ??? - テストの対象となる文字列
    * 引数②: {number} ??? - 閾値
    * 返り値： 与えられた文字列の長さが指定された閾値より長いかどうか
    */
   // ここにコードを書きましょう
   function isLongerThan(string, number){
    return string.length > number;
   }

   actual = isLongerThan("three", 3);
   expected = true;

   // testを呼び出す
    test(actual, expected)

   actual = isLongerThan("three", 5);
   expected = false;

   // testを呼び出す
    test(actual, expected)

   actual = isLongerThan(3, 5);
   expected = "Invalid input.";

   // testを呼び出す
    test(actual, expected)

//2
   /**
    * 引数: { number }??? - テストの対象となる数値
    * 返り値:  与えられた数値が奇数かどうかを表すブーリアン
    */
   // ここにコードを書きましょう
   function isOddWithoutIf(number){
    console.log(typeof((number%2) === 1 ));
    return (number%2) === 1 ;
   }
   actual = isOddWithoutIf(3);
   expected = true;

   // testを呼び出す
    test(actual, expected)

   actual = isOddWithoutIf(4);
   expected = false;

   // testを呼び出す
    test(actual, expected)

//3
   /**
    * 引数: ??? - 数値（0-10）。その名前がアルファベットの形で返ることになる
    * 返り値:  {"zero"|"one"|"two"|"three"|"four"|"five"|"six"|"seven"|"eight"|"nine"|"ten"} 与えられた数値をアルファベットで記した時の名前
    */
   // ここにコードを書きましょう
//    let array
//    function getSimpleNumberName(num){
//       num=
//    }
//    actual = getSimpleNumberName(0);
//    expected = "zero";

//    // testを呼び出す
//     test(actual, expected)

   // さらにテストを書いて、コードが正しいことを確認してください