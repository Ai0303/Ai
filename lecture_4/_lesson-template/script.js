'use strict'
// Please don't delete the 'use strict' line above
console.log("hello world!");

function getOddNumbers(array){
    const result=[] ;
    
    for (const number of array){
        if (number % 2 ===1){
            result.push(number);
        }
    }
        return result;
    }

    
console.log(getOddNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))
