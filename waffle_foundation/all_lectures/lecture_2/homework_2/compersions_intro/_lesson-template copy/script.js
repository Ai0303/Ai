"use strict";
// Please don't delete the 'use strict' line above
console.log("hello world!");

//1
//console.log(2 + 3 * 10 > 50);
console.log(2 + 3 * 10 < 50);

//2
function isEqual(valueOne, valueTwo) {
  return valueOne == valueTwo;
}

console.log(isEqual("5", 5));

//3-1
function isGreaterThan(valueOne, valueTwo) {
  return valueOne > valueTwo;
}

console.log(isGreaterThan(5, 3));
console.log(isGreaterThan(3, 5));

//4
function isOfAge(age) {
  return age >= 20;
}
console.log(isOfAge(19));

//1 Labday Work
function isEven(n) {
  return n % 2 == 0;
}
console.log(isEven(4));
console.log(isEven(3));

//2
function calculateTrapezoidArea(h, b1, b2) {
  return ((b1 + b2) * h) / 2;
}
console.log(calculateTrapezoidArea(1, 2, 3));

function calculateCircleArea(r) {
  return Math.PI * r * r;
}
console.log(calculateCircleArea(5));
console.log(Math.PI);

//3
function validCredentials(username, password) {
  const minimumlength = 8;
  return username.length >= minimumlength && password.length >= minimumlength;
}
console.log(validCredentials("Ai", "1234567"));

//任意
const password = "google12";
const regex = /[0-9], [A-Z]/g;
const found = password.match(regex);
if (found) {
  found !== null;
}

console.log(found && found.length > 0);

function simpleHelloA() {
  console.log("hello");
}

function simpleHelloB() {
  return "hello";
}

const d = simpleHelloA();
const e = simpleHelloB();
console.log(d, e);
