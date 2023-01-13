const clog = (label,log) => {
    //console.log(label, ": ", log)
    console.log(`${label}: ${log}`)
}

//--------DESTRUCTURING an array-------------
// const number = [
//     1,2,3,4,5,8,100,4234234,234234,
// ]

// //const render = number[1]
// const [a,b,c,d,e,f,g,h,i] = number

//  //clog("old way", render);

//  clog("destructure",a)
//  clog("destructure",b)
//  clog("destructure",c)


//------------------------------------
const person1 = {
    firstname: "andy",
    lastname: "linnell",
    age: "28",
    hair: "black",
    eye: "hazel",
    height:"180",
    gender:"m"
}

const person2 = {
    firstname: "lucy",
    lastname: "lee",
    age: "99",
    hair: "blue",
    eye: "red",
    height:"222",
    gender:"f"
}

// const firstname =person.firstname   ----- is a lot of coding, instead we can destructure
// const lastname =person.lastName
// const age =person.age
// const hair =person.hair

// --------------Desturcturing object-------------------------
const {firstname,lastname,age,hair,eye,height,gender} = person1

clog("hair", hair)

// why use destructuring?
const sentence = `hi ${person1.firstname} ${lastname} their gender is ${person1.gender}`// instead you can
const sentence0 = `hi ${firstname} ${lastname} their gender is ${gender}`

clog("w.o destructure", sentence)
clog("destructured", sentence0)