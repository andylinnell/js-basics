// given any array of numbers write a function that returns the largest number in that array (without using math.max)

myArray = [43, 12, 9, 76, 24, 55, 87, 44]

function largestNum (array) {
    
    let maxVal=0
    
    for (i = 0; i < array.length ; i++) {
        if (array[i] > maxVal){
            maxVal=array[i]
        }

    }
    return maxVal;
}

console.log(largestNum(myArray));

// give count of odd numbers in an array

myArray = [43, 12, 9, 76, 24, 55, 87, 44]

function addOddAmount (anArray) {
    let oddAmount=0
    for (i = 0; i < anArray.length ; i++) 
        
        if (anArray[i]%2 === 1){
            oddAmount++
    }
    return oddAmount;
}

console.log(addOddAmount(myArray));