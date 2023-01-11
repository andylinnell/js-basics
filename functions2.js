// There are 4 types of funtion --
// I. Do something / No params
// II. Do something / With Params
// III. Retur something / no params
// IV. Return somthing / with params

// I. Example
function sayHelloWorld () {
    console.log("Hello , world.")
}

sayHelloWorld() // calls the function
// sayHelloWorld  is the function but won't call

// II. Example 

function greetFriend(name){
    console.log("Hello, " + name)
}

greetFriend("Andy"); // should console.log "Hello, Andy"

// III. Example

function addTwoPlusTen (){
    const result = 2 + 10;
    return result;
}

console.log(addTwoPlusTen());

// IV. Example

function addTwoNumbers(a,b){
    const result = a + b;
    return result;
}

console.log(addTwoNumbers(20,30));
// or
const mySum = addTwoNumbers(23,17);
console.log(mySum);

// Real World example

function calculateSalesTax(subtotal, taxRate){
    const salesTax = (subtotal * taxRate).toFixed(2);
    return salesTax;
}

console.log(calculateSalesTax(2.34,54.55))