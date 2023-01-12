function doSomething (){
    console.log("something");

}
console.log("start");
setTimeout(doSomething, 2000)

// *********

setTimeout(() => {
    console.log("other thing")
},1000)


console.log("end");

// *****

function addTwoNums (a,b) {
    return a + b
}

const add2Nums = (a,b) => {
    return a + b
}

const squareNum = a => {
    return a**2
}

//  IF THE FUNCTION IS ONLY ONE LINE, AND THAT LINE IS A RETURN 
// WE CAN LEAVE OFF THE {} AND THE return

const squareNum2 = a => a **2

console.log(squareNum2(5))

// example

const aspectRatio = (w,h) => w / h