// given an array of numbers, write a function to return the sum

const array = [23,74,18,42,69,91,88];


function calculateSum (arr) {
    
    let sum = arr[0];
    
    for(let i = 1 ; i < arr.length; i++){
        sum = sum + arr[i];
     }
     
     return sum; 
    }
    
const mySum = calculateSum(array);
console.log(mySum);