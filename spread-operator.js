const primeNumber = [
    2, 3, 5, 7, 11, 13
];

const evenNumber = [
    2,4,6,8,10,12
]


const clog = (label, log) => console.log(label,": ", log)
 const newArray = primeNumber; // this is just referencing newArray and anything done to primenumber will also affect newarray

// clog("new array", newArray);
// clog("original array", newArray)

// primeNumber.push(17)
// clog("original array", primeNumber)
// clog("new array", newArray);


//--------------

const newArray1 = [...primeNumber]

clog("og array", primeNumber)
clog("nw array", newArray1)

primeNumber.pop();

clog("og array-pop", primeNumber)
clog("nw array", newArray1)
//------------------------------

// const newCar = {...car};

// clog("ori obj", car);
// clog("copy obj", newCar);

//---------------------

const newNumberList = [primeNumber, evenNumber]
const newNumberList2 = [...primeNumber, ...evenNumber]


clog("array combined", newNumberList)
clog("array combined with ...", newNumberList2)


// Math.max -------------------
const mathmax = Math.max(...newArray1) 
clog("math max", mathmax)