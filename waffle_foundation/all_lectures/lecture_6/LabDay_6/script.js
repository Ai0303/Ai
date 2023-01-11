"use strict";
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
// 問題３の前
const code = "hello!";

for (const c of code) {
  console.log(c);
}

// 1文字ずつ表示されるのを確認できましたか？？

// 問題３
// 関数 `countVowel` を宣言してください。
/**
 * @param {string} ???
 * @returns {number} 与えられた文字列の中で母音(a, i, u, e, o)の合計の数を返す
 */
// ここにコードを書きましょう.

function countVowel(string) {
  const Vowls = new Set(["a", "i", "u", "e", "o"]);
  let result = 0;
  console.log(Vowls);
  for (const S of string) {
    if (Vowls.has(S)) {
      result += 1;
    }
  }
  return result;
}

test(countVowel("hello"), 2);
test(countVowel("WaffleCollege"), 5);

// 問題4
/**
 * @param {string} ???
 * @returns {{ [character: string]: number }} 与えられた文字列の中の各アルファベットをキーに、その登場回数を値にしたオブジェクト
 */
// ここにコードを書きましょう.
function countCharacters(string) {
  const object = new Object();
  for (const S of string) {
    if (object.hasOwnProperty(S)) {
      object[S] = object[S] + 1;
    } else {
      object[S] = 1;
    }
    console.log(object);
    console.log("S;", S);
    console.log("obejct.has own property", object.hasOwnProperty(S));
  }
  return object;
}

test(countCharacters("hello"), { h: 1, e: 1, l: 2, o: 1 });
test(countCharacters("hello hello"), { h: 2, e: 2, l: 4, o: 2, " ": 1 });
