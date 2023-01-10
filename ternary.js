const gender = "female"

// ?  -  then
// :  -  else
const greeting = (gender === 'male') ? "Hello sir." : "Hello ma'am"

console.log(greeting)

// another example...

const age = 17;

const message = (age >= 21)
                        ? 'drink up!'
                        : 'have some water.'

console.log(message)

// extra for experts
// Nesting ternaries....

const message2 = (age >= 21)
                        ? 'drink all you want'
                        : (age >= 18)
                                ? 'have some more water'
                                : 'please leave now'

    console.log(message2)


