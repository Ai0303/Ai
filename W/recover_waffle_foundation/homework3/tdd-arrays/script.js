'use strict'
// Please don't delete the 'use strict' line above
console.log("hello world!");

//1
function numberOfPeople(arrayOfPeople) {
    return arrayOfPeople.length;
}

function testArray(actual, expected){
if (JSON.stringify(actual.length) === JSON.stringify(expected)) {
    console.log("Yay! Test PASSED.");
} else {
    console.error("Test FAILED. Keep trying!");
    console.log("  expected:", expected);
    console.log("    actual:", actual);
}
}
testArray(["Kimiko", "Yan", "Dustin", "Dylan"], 4);

testArray(["John", "Paul", "George H.", "Ringo", "George M."], 5);

// ちゃんと動くか確認 → 全て"Yay! Test PASSED."と表示されますか??
    console.log(testArray(numberOfPeople(["Urara", "Tokotoko"]), 2));
    console.log(testArray(numberOfPeople(["Mike", "Bassy", "Ishity", "Asumi"]), 4));
    console.log(testArray(numberOfPeople([]), 0));

// "Test FAILED. Keep trying" と表示されるように、引数を決めてtestArrayを呼び出してみましょう！

//2
   /**
    * 引数:  ??? - 配列
    * 返り値:  配列の真ん中が "hi" に置き換えらえた配列、もしくは同じ配列を返す
    */
   // ここにコードを書きましょう
    // function hiInTheMiddle(actual){
    //    if ((actual.length % 2) = 1){
    //     return Math.floor(actual.length / 2) = "hi";
    //    }else{
    //     return actual;
    //    }
    // }

    // テスト
   
 
     // actual と expected を使って、テストを書いてみましょう！
     // 上で宣言した、testArray関数を使ってみましょう！
    //  function testArray(actual, expected){
    //     if (actual===expected){
    //         console.log("Yay! Test PASSED.");
    //     } else {
    //     console.error("Test FAILED. Keep trying!");
    //     console.log("  expected:", expected);
    //     console.log("    actual:", actual);
    //     }
    //  }
 
 
    // testArray(hiInTheMiddle([1, 2, 3, 4]), [1, 2, 3, 4]);
    // testArray(hiInTheMiddle([1, 2, 3, 4, 5]), [1, 2, "hi", 4, 5]);
    // actual と expected を使って、テストを書いてみましょう！
     // 上で宣言した、testArray関数を使ってみましょう！

// 2
/**
    * 引数： ??? - 配列
    * 返り値： 与えられた配列の最後の要素を返す。
    */
   // ここにコードを書きましょう
     function pop(array){
        return array.splice;
     }
   array = [1, 2, 3, 4];

   actual = pop(array);
   expected = 4;
   testArray(actual, expected)


   actual = array;
   expected = [1, 2, 3];
   testArray(actual, expected)

// 3
   /**
    * 引数①: ??? - 配列
    * 引数②: ??? - 配列の _先頭_ に追加する値
    * 返り値: {number} 処理後の配列の長さを返す。
    */
   // ここにコードを書きましょう
   
    function unshift(array, num){
        return array.splice[num + array]
     }
   
   array = [1, 2, 3, 4];
   actual = unshift(array, 5);
   expected = 5;

   if (actual === expected) {
     console.log("Test PASSED!");
   } else {
     console.error("Test FAILED. Keep trying!");
     console.group("Result:");
     console.log("  actual:", actual);
     console.log("expected:", expected);
     console.groupEnd("Result:");
   }

   actual = array;
   expected = [5, 1, 2, 3, 4];
   testArray(actual, expected)

// 4
   /**
    * 引数: ??? - 配列
    * 返り値： 与えられた配列の先頭の要素を返す。
    */
   // ここにコードを書きましょう

   array = [1, 2, 3, 4];

   actual = shift(array);
   expected = 1;

   if (actual === expected) {
     console.log("Test PASSED!");
   } else {
     console.error("Test FAILED. Keep trying!");
     console.group("Result:");
     console.log("  actual:", actual);
     console.log("expected:", expected);
     console.groupEnd("Result:");
   }

   actual = array;
   expected = [2, 3, 4];

   testArray(actual, expected)