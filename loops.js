// count down from 10 then blast off
// for(let i = 10 ; i > 0; i--){
//     console.log(i,);
// }

// console.log("~~blast off!!~~");



function pyramid (n){
    let emoji = " "
    for (let i = 1; i <= n; i++){
        for (let j = 1; j <= i; j++){
            emoji += "*"
  }
   emoji += "\n"
}
}
console.log(pyramid(5));