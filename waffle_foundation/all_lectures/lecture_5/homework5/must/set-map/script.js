"use strict";
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
const colors = new Array(
  "赤",
  "白",
  "黄",
  "赤",
  "青",
  "赤",
  "赤",
  "青",
  "黄",
  "青"
);
const color_map = new Map();

// 続きを書いてみましょう

// colors配列の要素を順番にみていき、Mapに格納してみましょう

// 以下、簡易的なテスト
// 全て、trueと表示されれば OK!!
console.log(color_map.get("赤") === 4);
console.log(color_map.get("白") === 1);
console.log(color_map.get("黄") === 2);
console.log(color_map.get("青") === 3);

// もし、うまく表示されないのがあれば、
// console.log(color_map.get("青"));
// のように、その箇所だけコンソールに出力して確認してみてください！

// 問題２
// 以下、まずはそのまま実行してみてください！

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

console.log(getRandomInt(0, 10));

// 0以上, 10未満の整数がランダムで表示されましたか...？
