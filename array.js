// const person = {
// const firstName = "andy";
// const lastName = "linnell";
// const age: 47
// }

const personarray = [
    "andy",     // 0
    "linnell",  // 1
    47          // 2
];

// mutate a value
personarray[0] = "tony";
personarray[3] = "attoinette";

const fullName  = personarray[0] + " " + personarray[1];

const totalLength = personarray.length;

console.log(personarray);
console.log("fullName: " + fullName);
console.log("total :", totalLength)
