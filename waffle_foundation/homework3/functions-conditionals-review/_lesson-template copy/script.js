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
   function getSimpleNumberName(num){
    if(num===0){
        return "zero";
    }
    if(num===1){
        return "one";
    }
    if(num===2){
        return "two";
    }
    if(num===3){
        return "three";
    }
    if(num===4){
        return "four";
    }
    if(num===5){
        return "five";
    }
    if(num===6){
        return "six";
    }
    if(num===7){
        return "seven";
    }
    if(num===8){
        return "eight";
    }
    if(num===9){
        return "nine";
    }
    if(num===10){
        return "ten"
    }
       }
   actual = getSimpleNumberName(0);
   expected = "zero";

//    // testを呼び出す
    test(actual, expected)

   // さらにテストを書いて、コードが正しいことを確認してください

//4   関数 getRegularConvexPolygonName を宣言してください。
   /**
    * 引数:  ??? - 正多角形の辺の数 (3-8)
    * 返り値:  {"triangle"|"square"|"pentagon"|"hexagon"|"heptagon"|"octagon"} 与えられた数の辺を持つ凸多角形の英語名
    */
   // ここにコードを書きましょう
   let katachi=["triangle", "square", "pentagon", "hexagon", "heptagon", "octagon"]
   function getRegularConvexPolygonName(side){
    if (side===3){
        return katachi[0];
    }
    if (side===4){
        return katachi[1];
    }
    if (side===5){
        return katachi[2];
    }
    if (side===6){
        return katachi[3];
    }
    if (side===7){
        return katachi[4];
    }
    if (side===8){
        return katachi[5];
    }
   }
   actual = getRegularConvexPolygonName(3);
   expected = "triangle";

   // testを呼び出す
    test(actual, expected)

   // さらにテストを書いて、コードが正しいことを確認してください

// JavaScript において、よく使う関数は、定義を書かなくても呼び出すだけですぐに使えるようになっています。Math.random, Math.floor や Math.ceil について MDN で確認し、どのように使うかチェックしてください。
// そして以下の演習をやってみましょう。必要なテストも書きましょう
// randomNumber: この関数は数値型のデータ number を引数として取り、0 以上 number（引数の数字） 未満の間のランダムな値を返します。
// guessMyNumber: この関数は数値型のデータ number を引数として取り、引数で与えられた数字と 0 以上 5 以下の間のランダムな整数を比較します。比較した結果一致すれば "YES!" を、一致しなければ "NO!" を返します。

