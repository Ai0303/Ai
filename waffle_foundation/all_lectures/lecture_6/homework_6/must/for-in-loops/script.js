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

// 問題１
const hellos = {
  English: "Hello",
  Japanese: "Konnichiwa",
  German: "Hallo",
  Spanish: "Hola",
  Arabic: "Ahlan wa sahlan",
  Chinese: "Nihao",
};
   /**
    * @returns {undefined} この関数は色々な言語で"Hello" を表示するだけで、返り値は必要ありません。
    */
   // ここにコードを書きましょう
　function sayHellos(greetings){
  for(const greeting in greetings){
    const Value = greetings[greeting];
    console.log(greeting)
    console.log(Value);
  }
}
   // console.log の表示は、返り値ではないため、テストするのは困難です。
   // 今回は、コンソールの表示を確認することで、テストとしてください。

   sayHellos(hellos);
   // "Hello"
   // "Konnichiwa"
   // "Hallo"
   // "Hola"
   // ...

  //　問題2
     /**
    * @param {object} ???
    * @returns {Array<string>} 与えられたオブジェクトのすべてのキーが入った配列
    */
   // ここにコードを書きましょう
  function getKeys(object){
    let result = [];
    for (const key in object){
      result.push(key);
    }
    return result;
  }
   const object1 = { a: 1, b: 2, c: "hello" };
   const object2 = { 1: "a", 2: "b", hello: "c" };

   test(getKeys(object1), ["a", "b", "c"]);
   test(getKeys(object2), ["1", "2", "hello"]);

// 問題3
   /**
    * @param {object} ???
    * @returns {Array<any>} 与えられたオブジェクトのすべての値が入った配列
    */
   // ここにコードを書きましょう
  function getValues(object){
    let result = [];
    for (const value in object){
      const ArrayValue = object[value];
      result.push(ArrayValue);
    }
    return result;
  }
   test(getValues(object1), [1, 2, "hello"]);
   test(getValues(object2), ["a", "b", "c"]);

// 問題4
const myObj = { foo: 1, bar: 2, key: 3, delta: 4, lee: 5 };
function printAll(object) {
  for (const key in object) {
    const value = object[key];
    console.log(value);
  }
}
printAll(myObj);

// 問題5
   /**
    * @param {object} ??? - オブジェクト。ただし値はすべて異なるものとする。
    * @returns {object} 与えられたオブジェクトのキーと値を入れ替えた、新しいオブジェクト
    */
   // ここにコードを書きましょう
  function swapPairs(object){
    const ReturnObject = {}
    for (const key in object){
      const value = object[key];
      ReturnObject[value] = key;
    }
    return ReturnObject;
  }
   const object3 = { a: 1, b: 2, c: 3, d: 4 };
   const object4 = { 1: "a", 2: "b", 3: "c", 4: "d" };

   test(swapPairs(object3), { 1: "a", 2: "b", 3: "c", 4: "d" });
   test(swapPairs(object4), { a: "1", b: "2", c: "3", d: "4" });

  //  問題6
     /**
    * @param {Array<object>} ??? - オブジェクトを要素に持つ配列

    * @returns {Array<any>} 与えられた配列の最初のオブジェクトの、すべての値(valueの方)が入った配列
    */
   // ここにコードを書きましょう。
  function getFirstObjectValues(ObjInArr){
    let result = [];
    for (const object of ObjInArr){
      console.log ("配列内のオブジェクト", object);//１：{ a: 1, b: 2 }｜２：{ a: 3, b: 3 }1と2は別々に表示されるだからobject[0]などとインデント指定表示を使用とするとオブジェクトのキーとして認識される。
      console.log ("最初のオブジェクト", ObjInArr[0])//配列内のオブジェクトとして認識されるからインデントを使える。ObjInArr[0]と指定すると{ a: 1, b: 2 }が表示される。
      if(object === ObjInArr[0]){
        for (const value in object){
            const ValueInArr = object[value];
            result.push (ValueInArr);
        }
      }
    }
    return result;
  }
   const collection = [{ a: 1, b: 2 }, { a: 3, b: 3 }, { b: 4 }, { a: 100 }];
   const collection2 = [{ a: 3, b: 3 }, { b: 4 }, { a: 100 }];

   test(getFirstObjectValues(collection), [1, 2]);
   test(getFirstObjectValues(collection2), [3, 3]);

// 問題7
   /**
    * @param {Array<object>} ???
    * @returns {Array<any>} 与えられた配列のすべてのオブジェクトの、すべての値(valueの方)が入った配列
    */
   // ここにコードを書きましょう
  function getAllValues(ObjInArr){
    let result = [];
    for (const object of ObjInArr){
      for (const key in object){
        console.log(key);
        const value = object[key];
        result.push(value);
      }
    }
    return result;
  }
   test(getAllValues(collection), [1, 2, 3, 3, 4, 100]);
   test(getAllValues(collection2), [3, 3, 4, 100]);

// 問題8
   /**
    * @param {Array<object>} ???
    * @returns {Array<any>} 与えられた配列内のすべてのオブジェクトのすべての値が入った配列。重複した値がある場合は 1 つだけ残す。
    */
   // ここにコードを書きましょう
  function getAllValues2(ObjInArr2){
    let result = [];
    for(const Obj of ObjInArr2){
      for (const key in Obj){
        const value = Obj[key];
        result.push(value)
        
        }      
    }
        const my_set = new Set(result);
        const ReturnArray = Array.from(my_set) //Setオブジェクトを配列に変換するときはArray.from（）メソッド使う。
        console.log ("my_set", my_set)
        console.log(ReturnArray)
        return ReturnArray;  
        
        //** for (const keys in my_set){
        //   console.log("key", keys)
        //result.push(keys)
        //**}　→→Setは重複を許さないがそれはあくまでSet内の中だけ…だからSetをfor in loop(keys)に分解したら重複している値も出てくる。
        // return result;
        
          
  }
   const collection3 = [{ a: 1, b: 2, c:2 }, { d: 1, e: 3 }, { f: 4, g:5 }];
   const collection4 = [{ d: 1, e: 3 }, { f: 4, g:5 }];

   test(getAllValues2(collection3), [1, 2, 3, 4, 5]);
   test(getAllValues2(collection4), [1, 3, 4, 5]);