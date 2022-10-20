'use strict'
// Please don't delete the 'use strict' line above
console.log("hello world!");



//演習問題
//１
const name="愛"
console.log(name);

let age="19"
console.log(age); //

const isProgrammer="true"
console.log(isProgrammer); // "true"

let currentTask="1"
console.log(currentTask); // "1"

//２
currentTask="2"
console.log(currentTask); // "2" を表示

//３
// 正方形の面積を計算して保存
const squareSideLength = 2;
// ここにあなたのコードを書いてください
const squareArea=squareSideLength*squareSideLength;


console.log(squareArea); // "4" を表示

// 長方形の面積を計算して保存
const rectangleBaseLength = 3;
const rectangleHeightLength = 4;
// ここにあなたのコードを書いてください
const rectangleArea=rectangleBaseLength*rectangleHeightLength;


console.log(rectangleArea); // "12" を表示

// 三角形の面積を計算して保存
const triangleBaseLength = 4;
const triangleHeightLength = 5;
// ここにあなたのコードを書いてください
const triangleArea=triangleBaseLength*triangleHeightLength;

console.log(triangleArea); // "10" を表示



//変数のタイプ
// 例
const variableString = "I am a string";
console.log(typeof variableString); // "string"と表示されましたか？

// 問題1
const variableNumber = 5;         // "number"と表示させるにはどんな値を代入すればいいでしょう？
console.log(typeof variableNumber); // "number"と表示されましたか？

// 問題2
// ここにコードを書いて、"boolean"と表示されるようにしてください。
const variableBoolean=true;
console.log(typeof variableBoolean);

// 問題3
//ここにコードを書いて、"undefined"と表示されるようにしてください。

console.log(typeof variableUndefined);
const numberA = 3;
   const numberB = 5;

   const average = (numberA+numberB)/2;
   console.log(average); // numberA と numberB の平均が表示される。



   //中級演習：Lab Dayおすすめ問題
   // 円の円周と面積を計算して保存する
    const circleDiameter = 10;
    // ここにあなたのコードを書いてください
    const circleCircumference=circleDiameter*Math.PI;
    
    const circleArea= Math.pow(2/10,2)*Math.PI;

    console.log(circleCircumference); // "31.41592653589793" に近い値を表示
    console.log(circleArea); // "78.53981633974483" に近い値を表示
   
    //２
    let a = "B";
    let b = "A"; 
    let c="B";
    a="A"
    b="B"
    console.log(a); // "A" を表示
    console.log(b); // "B" を表示



    //任意課題

    //応用問題
    //１指数関数的成長　2のべき乗
    let value = 1;
　　value=Math.pow(2,0)
    console.log(value); // "1" を表示
 
    // value に何かを行う
    value=Math.pow(2,1)
    console.log(value); // "2" を表示
 
    // value に何かを行う
    value=Math.pow(2,2)
    console.log(value); // "4" を表示
 
    // value に何かを行う
    value=Math.pow(2,3)
    console.log(value); // "8" を表示

    // value に何かを行う
    value=Math.pow(2,4)
    console.log(value); // "16" を表示
 
    // value に何かを行う
    value=Math.pow(2,5)
    console.log(value); // "32" を表示
 
    // value に何かを行う
    value=Math.pow(2,6)
    console.log(value); // "64" を表示

    //2
    const firstName = "Yan";
    const lastName = "Fan";
    const city = "Tokyo";
    const kansei="Hello, my name is "+firstName+lastName+".  I live in "+city+"."
    console.log(kansei); // "Hello, my name is Yan Fan. I live in Tokyo." を表示

    //3
     // ヒント： ここで何かする必要があるかもしれません
     //let count=0;
     //function counter(count) {
       // counter=count+1;
     
   
    // ここにあなたのコードを書いてください
    
     //}
     //counter(count); // => 1
     //counter(count); // => 2
     //counter(count); // => 3
    
    // etc.

    //4 
    function isOdd(givenNumber) {
        // ここにあなたのコードを書いてください
       
        if(givenNumber%2==0)
            {console.log=("No, it's even"); 
        } else{
            console.log=("Yes, it's odd");
        }

           
    }
                        
            
      