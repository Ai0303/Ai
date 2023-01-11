"use strict";
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

// 　問題１
/**
    * @param {Array<any>} ??? - 配列

    * @returns {boolean} 与えられた配列の要素が重複を含んでいないかを表すブーリアン
    */
function haveMultipleElements(Array) {
  const my_set = new Set(Array);
  console.log(my_set.size);
  console.log(Array.length);
  if (Array.length === my_set.size) {
    return true;
  }
  return false;
}

// テストを実行
test(haveMultipleElements([1, 2, 3, 4]), true);
test(haveMultipleElements([1, 3, 3, 4]), false);

//   問題2
const hands = new Array("パー", "グー", "チョキ");
const player = "パー";

/**
 * @param {int} min - ランダムで出したい値の最小値
 * @param {int} max - ランダムで出したい値の最大値より1つ大きい値
 *
 * @returns {int}} min 以上 max 未満 の整数値を「ランダムで」出力
 */

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

// 1つめの引数を0, 2つ目の引数を3とすると, 0から2の整数がランダムで出力される
console.log(getRandomInt(0, 3));
let number = getRandomInt(0, 3);
console.log(number);
console.log(number === 0);
console.log(number === 1);
function jyanken() {
  let yourhand;
  console.log(yourhand);
  console.log(player);
  if (number === 0) {
    yourhand = hands[0];
    console.log(yourhand);
    console.log(yourhand);
    if (player === yourhand) {
      return "あいこ";
    }
  } else if (number === 1) {
    yourhand = hands[1];
    console.log(yourhand);
    if (player === yourhand) {
      return "勝ち";
    }
  } else if (number === 2) {
    yourhand = hands[2];
    if (player === yourhand) {
      return "負け";
    }
  } else {
    return "okashi";
  }
}
console.log(jyanken());
// 上記のgetRandomInt関数と、配列 hands を生かしてジャンケンゲームを作成してみましょう！
// **期待される挙動**
// - コンピュータの手はランダムで表示される
// - 人間の手は、ソースコードの `const player = "パー"` で宣言。
// - 最終的な、勝ち負けをコンソールに表示する

// 問題3
const numArray = new Array();

for (let i = 0; i < 1000; i++) {
  numArray.push(i);
}

console.log(numArray);

// 問題4

// 関数 `checkAllAdmin` を宣言してください。

//    ```js
//    // adminMapの作成
//    // Admin権限を持っている人がtrue, そうでない人はfalse
//    const adminMap = new Map();
//    adminMap.set("Maitoko", true);
//    adminMap.set("Asumi", true);
//    adminMap.set("Bassy", false);
//    adminMap.set("Urara", true);
//    adminMap.set("Ayana", false);
//    adminMap.set("Mike", true);
//    adminMap.set("Ishity", false);

/**
    * @param {Array<string>} names - 名前の配列

    * @returns {boolean} 与えられた配列の名前に対して、Adminマップを参考にしながら、「全て」Admin権限を持っているかを返す
    */
function checkAllAdmin(names) {
  // ここにコードを書きましょう。
  const adminMap_set = new map(["Maitoko", true]);
}

// テストを実行
test(hasAdmin(["Maitoko", "Asumi"]), true);
// => Maitoko も Asumi も 両者ともにtrueなので、trueを返す
test(hasAdmin(["Maitoko", "Asumi", "Ayana"]), false);
// => Ayana はtrueではなく、全ての人がtrueであるわけではないので、falseを返す

// 問題5

// 関数 `checkOneAdmin` を宣言してください。

//    ```js
//    // adminMap2の作成
//    // Admin権限を持っている人がtrue, そうでない人はfalse
//    const adminMap2 = new Map();
//    adminMap2.set("Maitoko", true);
//    adminMap2.set("Asumi", true);
//    adminMap2.set("Bassy", false);
//    adminMap2.set("Urara", true);
//    adminMap2.set("Ayana", false);
//    adminMap2.set("Mike", true);
//    adminMap2.set("Ishity", false);

/**
    * @param {Array<string>} names - 名前の配列

    * @returns {boolean} 与えられた配列の名前に対して、adminMap2を参考にしながら、「少なくとも誰か一人が」Admin権限を持っているかを返す
    */
function checkOneAdmin(names) {
  // ここにコードを書きましょう。
}

// テストを実行
test(hasAdmin(["Maitoko", "Asumi", "Ayana"]), true);
// => Ayana はfalseだが、他の人がtrueであるので、trueを返す

test(hasAdmin(["Bassy", "Ishity", "Ayana"]), false);
// => 3人全てfalseなので、falseを返す
