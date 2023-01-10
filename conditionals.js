// There are 3 main ways to create conditionals in code
// 1. if (comes in many flavors)
// 2. switch (great for many conditions)
// 3. ternary (shorthand for if/else)

// first let's setup some variables

const age = 18;

// let's start with most basic if statment

if(age >= 18) {
    console.log("Welcome. Come on in!");
} 

// What about people that aren't yet 18?
// let's use an if...else

if(age >= 21) {
    console.log("Drink up!");
} else {
    console.log("Here's some water.")
}

// what if we have more than 2 possibilities?
// then we can use an elseif

const hour = 9;

if(hour < 11){
    console.log("Good morning.")
} else if (hour < 17) {
    console.log("Good afternoon.")
} else if(hour < 22){
    console.log("Good evening.")
} else{
    console.log("Go to Bed.")
};

// when dealing with MANY different conditions, we often use a switch

const yourPet = "owl";

switch(yourPet){
    case "dog":
        console.log("woof woof")
        break
    case "cat":
        console.log("meow meow")
        break
    case "bird":
        console.log("chirp chirp")
        break
    case "fox":
        console.log("what's the fox say?")
        break
    case "racoon":
    case "lizard":
    case "snake":
        console.log("that's a crazy pet, yo!")
        break
    case "turtle":
        console.log("i love turtles")
        break
    default:
        console.log("wow, i never even heard of that!")
        break
}

// For more on ternaries, look at ternary.js
