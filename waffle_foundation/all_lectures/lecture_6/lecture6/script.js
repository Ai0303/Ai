'use strict'
// Please don't delete the 'use strict' line above

// オブジェクト
// 予想してから実行してください！

const object = {
 a: "hello",
 b: "bye",
 c: 1000,
};
 
console.log(object["a"]); // ???
console.log(object.b); // ???
object["b"] = "goodbye";
console.log(object["b"]); // ???
console.log(object[c]); // ???

function test(actual, expected) {
 if (JSON.stringify(actual) === JSON.stringify(expected)) {
   console.log("Test PASSED.");
 } else {
   console.error("Test FAILED. Keep trying!");
   console.group("Result:");
   console.log("  actual:", actual);
   console.log("expected:", expected);
   console.trace();
   console.groupEnd();
 }
}
 


 
const obj1 = { a: "A" };
const obj2 = { a: "A", b: 2 };
const obj3 = { a: "A", b: 2, c: "C", d: true };
const obj4 = { a: "A", c: "C" };
/**
* @param {object} オブジェクト
* @returns {{ [key: string]: string }} 与えられたオブジェクトによく似たオブジェクト。ただし、値が文字列のキー/値ペアだけを持つ。
*/
function filterObjectForStrings(object) {
 for(const Key in object){
  if (Key === typeof.==="") 
 }
}
 
test(filterObjectForStrings(obj1), obj1); // 変化なし
test(filterObjectForStrings(obj2), obj1); // キーが "b" のペアは含まれていない
test(filterObjectForStrings(obj3), obj4); // キーが "b" や "d" のペアは含まれていない