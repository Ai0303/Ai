'use strict'
// Please don't delete the 'use strict' line above
console.log("hello world!");

function isPositive(num) {
    if (num > 0) {
      return true;
    }
    return false;
    
  }

// テスト1つ目

function test(actual, expected){
    if (actual === expected) {
        console.log("Yay! Test PASSED.");
    } else {
        console.error("Test FAILED. Keep trying!");
        console.log("  expected:", expected);
        console.log("    actual:", actual);
    }
    }
// testという名前で関数を宣言しよう


// ちゃんと動くか確認
test(isPositive(10), true);
// => "Yay! Test PASSED." と表示される?

test(isPositive(10), false);
// => "Test FAILED. Keep trying" と表示されたのち、「実際のテスト値」と「期待値」が表示される?