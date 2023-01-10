const person = {
    firstName: "andy",
    lastName: "linnell"
}

function studentName (propFirstName, propLastName) {
    const firstName = propFirstName;
    const lastName = propLastName;
    const fullName = firstName + " " + lastName;
    return fullName;
}

console.log( studentName(person.firstName,"stark") );
console.log( studentName("st.","mary") );


// Another example...

function sayHello (firstName="stranger") { // ="stranger" gives input default if no input is given
    console.log("hi " + firstName);
}

sayHello();

//const salutation = sayHello("andy");
//console.log(salutation); //returns undefined


// example 3....

function sumAdd (x=0,y=0) {
    let sum = x + y;
    return sum;
}

console.log(sumAdd(200, 300))