"use strict";
// Please don't delete the 'use strict' line above
console.log("hello world!");

// 1
/**
 * 引数：arrayOfPeople - 人の名前の配列
 * 返り値： 与えられた配列の長さ
 */
function numberOfPeople(arrayOfPeople) {
  // ここにコードを書きましょう
  return arrayOfPeople.length;
}
// テスト
console.log(numberOfPeople(["Alex", "Beau", "Carlos", "Dustin"])); // => 4

// 2
// ここに,配列studentsを作成するコードを書きましょう.
const students = ["Mike", "Kevin", "Bob", "Kerry", "Sabrina"];
function numberOfPeople(students) {
  return students.length;
}
// テスト
console.log(numberOfPeople(students)); // => 5

// 3
// ここにコードを書きましょう.
function numberOfPeople1(students) {
  students.push("Keity", "Ariana", "Selena");
  return students.length;
}
// テスト
console.log(numberOfPeople1(students)); // => 8

// 4
/**
 * 引数： array - 配列
 * 返り値： 与えられた配列の最後の要素を返す
 */
function last(array) {
  // ここにコードを書きましょう
  return array[array.length - 1];
}

// ここにテストを書いてください
// console.logを使って出力してOK. 意図した答えかを確認しよう
console.log(last(["1", "programming", "true", "music", "tree"]));

// 5 ??
/**
 * 引数1つ目:  ??? - 配列
 * 引数2つ目:  ??? - 配列の最後に追加する値
 * 返り値： 処理後の配列の長さを返す。与えられた配列の末尾に、第 2 引数で渡された要素を追加してください。
 */
// ここにコードを書きましょう
let array1 = [1, 2, 3, 4];
function push(array, number01) {
  array[array.length] = number01;
  return array.length;
}
// 関数が正しい結果を返すことを確認する
console.log(push(array1, 5)); // => 5
console.log(push(array1, 10)); // => 6

// 配列が正しく変更されていることを確認する
console.log(array1);
// => [1, 2, 3, 4, 5, 6];
