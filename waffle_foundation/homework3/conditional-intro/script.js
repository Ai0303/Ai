'use strict'
// Please don't delete the 'use strict' line above
console.log("hello world!");
// 1
function simplePasswordLock(password) {
    if (password === "password") {
      return "Correct! Welcome.";
    }else{
    return "Incorrect password, please try again.";
    } 
 }

   console.log(simplePasswordLock("qwerty")); // => "Incorrect password, please try again."
   console.log(simplePasswordLock("password")); // => "Correct! Welcome."

// 2
console.log("Hello".length);
   console.log("The length of this string is 31".length);
   console.log(" spaces! ".length);

// 3　文字列の引数を1つ取るとは？？
function isItTooLong(password){
    if (password.length>=10){
       return "true"; 
    }else{
        return "false"
    }
}
console.log(isItTooLong("12345678"));
console.log(isItTooLong("12345678910"));

// 4
function biggerNumber(numOne, numTwo) {
 if(numOne > numTwo){
    return "The first argument is bigger.";
 }else(numOne < numTwo);{
    return "The second argument is bigger.";
 }
}

console.log(biggerNumber(4, 3)); // 'The first argument is bigger.' を表示
console.log(biggerNumber(3, 4)); // => 'The second argument is bigger.'

// 5
function greeting(name, language){
    if(language==="Japanese"){
        return "Konnichiwa," + name + "!";
    }else(language==="English");{
        return "Hello," + name + "!";
    }
}

console.log(greeting("Harry Potter", "Japanese")); // "Konnichiwa, Harry Potter!" が表示されるようにする。
console.log(greeting("Harry Potter", "English")); // => "Hello, Harry Potter!"

// 6
function isEven(number){
    if(number % 2 == 0){
        return"true";
    }else{
        return"false";
    }
}

console.log(isEven(4)); // => true
console.log(isEven(7)); // => false

