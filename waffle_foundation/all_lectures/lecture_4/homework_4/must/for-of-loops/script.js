"use strict";
// Please don't delete the 'use strict' line above
console.log("hello world!");

// 1
/**
    * @param {Array<number>} ??? - 数値型の要素を持つ配列

    * @returns {number} 与えられた配列のすべての数字の合計
    */
function sumArray(Array) {
  // ここにコードを書きましょう。
  let result = 0;
  for (const number of Array) {
    result = result += number;
  }
  return result;
}

function test(actual, expected) {
  if (actual === expected) {
    console.log("Test PASSED.");
  } else {
    console.error("Test FAILED. Keep trying!");
    console.group("Result:");
    console.log("  actual:", actual);
    console.log("expected:", expected);
    console.groupEnd();
  }
}
test(sumArray([1, 2, 3, 4]), 10);

// 2
/**
      * @param {Array<number>} ??? - 数値型の要素を持つ配列
  
      * @returns {number} 与えられた配列のすべての数字をかけあわせた答え
      */
function productArray(Array1) {
  let result = 1;
  for (const number of Array1) {
    result = result *= number;
  }
  return result;
}
test(productArray([1, 2, 3, 4]), 24);

// 3
/**
 * @param {Array<any>} ???
 * @returns {boolean} 与えられた配列に "fun" という文字列が入っているかどうかを表すブーリアン
 */
function hasFun(Array3) {
  let result = false;
  for (const word of Array3) {
    if (word === "fun") {
      result = true;
    }
  }
  return result;
}
test(hasFun(["whatever", 2, false, "fun", "hello"]), true);
test(hasFun(["whatever", 2, false, "run", "hello"]), false);

// さらにテストを書きましょう。

// 4
/**
 * @param {Array<any>} ???
 * @returns {boolean} 与えられた配列の要素がすべてブーリアンかどうかを表すブーリアン
 */
function containsOnlyBooleans(Array4) {
  // ここにコードを書きましょう。
  let result = false;
  for (const boolean of Array4) {
    if (boolean === true || boolean === false) {
      result = true;
    } else {
      return false;
    }
  }
  return result;
}

test(containsOnlyBooleans([true, false, true, false, false]), true);
test(containsOnlyBooleans([true, true, true, "not a boolean"]), false);

// さらにテストを書きましょう。

// 5
/**
 * @param {Array<any>} ??? - 1番目の配列
 * @param {Array<any>} ??? - 2番目の配列
 * @returns {Array<any>} 与えられた2つの配列を連結させた配列
 */
function concatenate(Array5, Array6) {
  // ここにコードを書きましょう。
  let result = [];
  for (const CoArray of Array5) {
    result.push(CoArray);
  }
  for (const CoArray of Array6) {
    result.push(CoArray);
  }
  return result;
}

// 現時点では、配列を比較するには JSON.stringify を使う必要があると覚えておいてください。
function test1(actual, expected) {
  if (JSON.stringify(actual) === JSON.stringify(expected)) {
    console.log("Test PASSED.");
  } else {
    console.error("Test FAILED. Keep trying!");
    console.group("Result:");
    console.log("  actual:", actual);
    console.log("expected:", expected);
    console.groupEnd();
  }
}
console.log("Q5");
test1(concatenate(["eeny", "meeny"], ["miny", "moe"]), [
  "eeny",
  "meeny",
  "miny",
  "moe"
]);

// さらにテストを書きましょう。

// 6
/**
    * @param {Array<number>} ??? - 数値型の要素を持つ配列

    * @returns {Array<number>} 与えられた配列の中の偶数だけを入れた配列
    */
function getEvenNumbers(Array8) {
  // ここにコードを書きましょう。
  let result = [];
  for (const number1 of Array8) {
    if (number1 % 2 === 0) {
      result.push(number1);
    }
  }
  return result;
}
test1(getEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8]), [2, 4, 6, 8]);

// 7
/**
    * @param {Array<number>} ??? - 数値型の要素を持つ配列

    * @param {number} ??? - 配列の中の数字にかける数字
    * @returns {Array<number>} 配列の中の数字に第2引数をかけた結果が入った新しい配列
    */
function getMultipliedArray(Array8, somenumber) {
  // ここにコードを書きましょう。
  let result = [];
  for (const times of Array8) {
    result = times * somenumber;
  }
  return result;
}

test1(getMultipliedArray([1, 2, 3], 6), [6, 12, 18]);

// LabDay work
// 1
/**
    * @param {Array<number>} ??? - 数値型の要素を持つ配列

    * @returns {boolean} 与えられた配列が昇順になっているかを表すブーリアン
    */
function isSorted(Array) {
  // ここにコードを書きましょう。
  let result = false;
  for (const boolean of Array) {
    if (boolean[0] < boolean[1]) {
      result = true;
      console.log(boolean);
    }
    return result;
  }
}

test(isSorted([1, 2, 3]), true);
test(isSorted([3, 2, 3]), false);

// 2
/**
 * @param {Array<any>} ??? - 配列
 * @param {string|number|boolean} ??? - 出現回数をカウントしたい値（値のデータ型は `string`、`number`、`boolean` のいずれかとする。）
 * @returns {number} その値が配列内で出てきた回数
 */
// }
function countOccurrences(Array, request) {
  // ここにコードを書きましょう。
  let result = 0;
  let array = [];
  for (const count of Array) {
    // array.push(count.filter(request));
    // result = array.length
    // console.log(count);
    // console.log(array);
  }
  return result;
}

test(countOccurrences([1, 2, 3], 2), 1);
test(countOccurrences([1, 2, 2], 2), 2);
test(countOccurrences([1, 2, "elephant"], "elephant"), 1);

// 3
/**
 * @param {Array<number>} ???
 * @param {"+"|"-"|"*"|"/"|"**"|"%"} ??? - 使用したい算術演算子を表す文字列
 * @param {number} ??? - 使用したい被演算子
 * @returns {Array<any>} 与えられた配列の各要素に、引数の算術演算子と被演算子を適用した結果が入った新たな配列
 */
function getOperatedArray(Array, arith, number) {
  // ここにコードを書きましょう。
  let result = [];
  for (const AnswerArray of Array) {
    if (arith === "+") {
      result.push(AnswerArray + number);
    }
    if (arith === "-") {
      result.push(AnswerArray - number);
    }
    if (arith === "*") {
      result.push(AnswerArray * number);
    }
    if (arith === "/") {
      result.push(AnswerArray / number);
    }
    if (arith === "**") {
      result.push(AnswerArray ** number);
    }
    if (arith === "%") {
      result.push(AnswerArray % number);
    }
  }
  return result;
}

test1(getOperatedArray([1, 2, 3], "+", 5), [6, 7, 8]);
test1(getOperatedArray([9, 6, 3], "/", 3), [3, 2, 1]);
