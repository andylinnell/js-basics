const numberArray = [
    "value1",  //0
    "value2",  //1
    "value3",  //2
    [          //3
        "sub-value1",  //0
        "sub-value2",  //1
        "sub-value3"   //3
    ],
    [           //4
        "sub-valueA",
        "sub-valueB",
        "sub-valueC"
    ],

    {
        name: "andy",
        gender: "m"
    }
];

console.log(numberArray[3][2]);
console.log(numberArray[4][2]);
console.log(numberArray[5]['name']);