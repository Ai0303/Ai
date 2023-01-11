"use strict";
// Please don't delete the 'use strict' line above
console.log("hello world!");

// 1
/**
 * @param {number} ??? - 年齢
 * @returns {boolean} 与えられた年齢がティーンエイジャー（13 歳から 19 歳までの間：「thirTEEN」から「nineTEEN」）かどうか
 */
function isTeenager(age) {
  // ここにコードを書きましょう.
  if (age >= 13 && age <= 19) {
    return true;
  } else if (Number.isNaN(age)) {
    return "Invalid! Age is not a number!";
  } else {
    return false;
  }
}

function test(actual, expected) {
  if (actual === expected) {
    console.log("Yay! Test PASSED.");
  } else {
    console.error("Test FAILED. Keep trying!");
    console.log("    actual: ", actual);
    console.log("  expected: ", expected);
  }
}

test(isTeenager(3), false);
test(isTeenager(14), true);

// さらにテストを書いて、コードが正しいことを確認してください。

// 2
test(isTeenager("Hello!"), "Invalid! Age is not a number!");
test(isTeenager(true), "Invalid! Age is not a number!");
test(isTeenager(), "Invalid! Age is not a number!");

// 3
/**
    * @param {string} ??? - 人の名前
    * @param {boolean} ??? - 丁寧な挨拶(さん づけ)にするかどうかを表すブーリアン
    * @param {boolean} ??? - "Hello" なら true を、"Goodbye" なら false
    * @returns {string} 与えられた引数に応じた適切な挨拶の文章

    */
// ここにコードを書きましょう.
console.log("A");

function anotherGreeting(name, M, greeting) {
  if (
    typeof name !== "string" ||
    typeof M !== true ||
    typeof greeting !== true
  ) {
    return "無効なインプットです！";
  } else if (M === true && greeting === true) {
    return "Hello, " + name + "-san.";
  } else if (M === false && greeting === false) {
    return "Goodbye, " + name + "!";
  } else if (M === true && greeting === false) {
    return "Hello, " + name + "!";
  } else if (M === false && greeting === true) {
    return "Goodbye, " + name + "-san.";
  }
}

test(anotherGreeting("Mary", true, true), "Hello, Mary-san.");
test(anotherGreeting("Mary", false, true), "Hello, Mary!");
test(anotherGreeting("Felix", true, false), "Goodbye, Felix-san.");

// さらにテストを書いて、コードが正しいことを確認してください。

// LabDayおすすめ問題
// 1

test(anotherGreeting(true, false, true), "無効なインプットです！");
test(anotherGreeting("Sam", true, 0), "無効なインプットです！");

// 2
/**
 * @param {number} ??? - 0 以上 100 以下の点数
 * @returns {"A"|"B"|"C"|"D"|"F"} 点数に応じた成績
 */
function getLetterGrade(evaluate) {
  if (evaluate >= 90 && evaluate <= 100) {
    return "A";
  } else if (evaluate >= 80 && evaluate <= 89) {
    return "B";
  } else if (evaluate >= 70 && evaluate <= 79) {
    return "C";
  } else if (evaluate >= 60 && evaluate <= 69) {
    return "D";
  } else if (evaluate >= 0 && evaluate <= 59) {
    return "F";
  } else {
    return "無効な点数です。";
  }
}
test(getLetterGrade(95), "A");
test(getLetterGrade(101), "無効な点数です。");

// 4
/**
 * @param {"A"|"B"|"C"|"D"|"F"} ??? - 成績
 * @returns {number} 各成績における最高点
 */
function getBestNumericalGrade(number) {
  if (number === "A") {
    return 100;
  } else if (number === "B") {
    return 89;
  } else if (number === "C") {
    return 79;
  } else if (number === "D") {
    return 69;
  } else if (number === "F") {
    return 59;
  } else {
    return "無効な点数です。";
  }
}
test(getBestNumericalGrade("A"), 100);
test(getBestNumericalGrade("B"), 89);

test(getBestNumericalGrade("恐竜ってすばらしい"), "無効な点数です。");
test(getBestNumericalGrade(100), "無効な点数です。");
