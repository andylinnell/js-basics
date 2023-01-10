// const firstName = "andy";
// const lastName = "linnell";

const person = {
    firstName: "andy",
    lastName: "linnell",
    age: 47
}

// dot notation
person.firstName;

// bracket notation
person["lastName"];

// mutate a value in an object
person.firstName = "tony";

// adding new property to an object
person.height = 178

//delete a property
// delete person.height;

console.log("hello " + person.firstName + person.lastName);
console.log("age: ", + person.age);
console.log("person object:", person);
console.log("height:" + person["height"]);
