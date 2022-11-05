'use strict'
// Please don't delete the 'use strict' line above
console.log("hello world!");

//1
function add(numOne, numTwo) {
    return numOne + numTwo;
  }

  // テスト
  console.log(add(4, 3)); // 7 を表示
  console.log(add(100, 42)); // => 142

//2
  console.log(add(100)); // 何が起こる？
  console.log(add(1, 4, 5)); // 何が起こる？

//3
function simpleFunctionA() {
    return "Hello simple function A";
  }

  function simpleFunctionB() {
    console.log("Hello simple function B");
  }

  console.log(simpleFunctionA(), "--> From running Simple Function A");
  console.log(simpleFunctionB(), "--> From running Simple Function B");

//4
function average(num1, num2) {
    // ここにコードを書いてください]
    return (num1+num2)/2;
  }
  console.log(average(4, 6)); // => 5
  console.log(average(100, 42)); // => 71

//5
function square(menseki) {
    return menseki*menseki;
  }
  square(5);

function square(X) {
    return X*X;
  }
function Square(side) {
    return side * side;
  }

//6
function cube(x) {
    return Math.pow(x,3)
}

//7
function waffleMaker(topping) {
    return topping+" Waffle"
}
// テスト
console.log(waffleMaker("Apple")); // => Apple Waffle
console.log(waffleMaker("Honey")); // => Honey Waffle

//8
function circle(hankei){
    return hankei*hankei*Math.PI
}
console.log(circle(2));

//1 比較入門
