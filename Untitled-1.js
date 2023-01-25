

//Write a function that runs through each item in an array of vegetables and returns each one. (hint: loops) Console.log your results. 

let vegetableArray = ["zucchini", "carrot", "lettuce", "potato"]

const veggieLog = anArray => {
    for(let i=0; i < anArray.length ; i++){
        console.log(anArray[i])
    }
}

veggieLog(vegetableArray)
