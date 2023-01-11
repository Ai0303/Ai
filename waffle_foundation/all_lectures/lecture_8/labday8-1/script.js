'use strict'
// Please don't delete the 'use strict' line above

// favoriteFoodのidがついたpタグを持ってきて、変数に入れる
const favoriteFood = document.getElementById("favoriteFood")

// 上で作成した変数に、文字をいれる
favoriteFood.textContent = "カレーライス";


// 問題1
// 上のを真似して、「好きなこと」も表示させましょう！
const favoriteThings = document.getElementById("favoriteThings")

favoriteThings.textContent = "バレエ";
// 問題2
// 日付を表示させましょう！
const today = new Date();
let year = today.getFullYear();
let month = today.getMonth() + 1;
let date = today.getDate();
console.log(today);
const date1 = document.getElementById("date");
date1.textContent = `${year}年${month}月${date}日`;
console.log(date1);
// 問題3
// DOMイベントを活用して、「クリックしたら背景色が変わる」ようにしよう
function changecolor(){
    let randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.backgroundColor = randomColor;
}
const botton = document.getElementById("changeColor")
botton.addEventListener("click", changecolor);
