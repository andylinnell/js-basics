/* ******* Do While ******* */
// console.log("Do while loop \n*************");

// let i = 0;
// do {
//     i++;
//     console.log("This is #", i);
// } while(i < 10);

/* ******* While Loop ******* */
// console.log("While Loop\n*******");

// let i = 0
// while (i < 10) {
//     i++
//     console.log('This is iteration #', i)
// }

/* ******* For Loop With Break ******* */
// console.log("For loop with break\n********");

// for (let i = 0 ; i < 10 ; i++) {
//     if (i === 5) {
//         break
//     }
//     console.log("this is iteration #", i);
// }


/* ******* For In Object ******* */
//console.log("For in object\n********");

// const person = {
//     firstName:"andy",
//     lastName:"linnell",
//     age: 28

// }

// console.log(person);

// for (let i in person){
//     console.log("key =>", i);
//     console.log("value =>", person[i], "\n");

// }

/* ******* For Of Object ******* */
//console.log("For of object\n********");

const car = [
    "crosstrek",
    "subaru",
    true,
    true
]

for (let i of car) {
    console.log("value =>", i);
}

