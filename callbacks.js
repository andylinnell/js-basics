function sayHello (){
    console.log('hello there')
}

function goSlow () {
    setTimeout(() => console.log("slow..."),500)
}

function sayGoodbye() {
    console.log("goodbye")
}


sayHello();
sayGoodbye();


// what if i want to gurantee that hello comes before goodbye?

function sayHelloThen (next) {
    (console.log("hello there!"))
    next()
}

sayHelloThen(() => console.log("goodbye!"));