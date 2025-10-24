//How JavaScript code actually runs behind the scenes?
// "undefined", "null" etc. have a fixed memory location/reference in heap memory.


//1. In case of "var" keyword"

// Execution Context

// 1.Memory allocation Phase
// a = undefined
// b = undefined
// addNumber = fnCode
// sumResult1 = undefined
// sumResult2 = undefined

// 2. Execution Phase
// // console.log(a);
// var a = 10;
// var b = 20;
// // console.log(a);

// var sumResult1 = addNumber(a,b);
// console.log(sumResult1);

// function addNumber(num1,num2){
//     var sum = num1+num2;
//     return sum;
// }

// // var sumResult1 = addNumber(a,b);
// // var sumResult2 = addNumber(4,5);
// // console.log(sumResult1,sumResult2);










// 2.1 In case of "let" and "const" keywords"

// Execution Context

// 1. Memory allocation Phase
// a = <uninitialised> (Temporal dead zone) ---> means variable is not accessible until it is declared
// b = <uninitialised> (Temporal dead zone)

//<uninitialised> (Temporal dead zone) ---> means, memory is allocated for this variable but it is 
// not accessible until it is declared/initialized with some value

// Execution phase


// console.log(a); // ReferenceError: Cannot access 'a' before initialization because variable "a" is in temporal dead zone means it is not accessible until it is declared but memory is allocated for it.
// let a = 10;
// const b = 20;
// console.log(a);






// 2.2 In case of "let" and "const" keywords"

// Execution Context

// 1. Memory allocation Phase
// a = <uninitialised> (Temporal dead zone) ---> means variable is not accessible until it is declared
// b = <uninitialised> (Temporal dead zone)
// result = <uninitialised> (Temporal dead zone)
// addNumber = <uninitialised> (Temporal dead zone) ---> Because, addNumber is a variable declared with "const" not a function

//<uninitialised> (Temporal dead zone) ---> means, memory is allocated for this variable but it is 
// not accessible until it is declared/initialized with some value

// Execution phase

let a = 10;
const b = 20;


// const result = addNumber(a,b); // Gives ReferenceError: Cannot access 'addNumber' before initialization because addNumber is in temporal dead zone & we cannot access it before it is declared.
// console.log(result);

// Below code represents function expression
const addNumber = function(num1,num2){
    const sum = num1+num2;
    return sum;
}

const result = addNumber(a,b);
console.log(result);


//About Hoisting: 

//Hoisting refers our JS code knows about variable and function declarations before executing the code/execution phase.
//In case of "var" keyword, variables are hoisted and initialized with "undefined".
//In case of "let" and "const" keywords, variables are hoisted but not initialized. They are in temporal dead zone until they are declared/initialized.
//Function declarations are hoisted and initialized with the function code.
//Function expressions behave like variables. If declared with "var", they are hoisted and initialized with "undefined". If declared with "let" or "const", they are hoisted but not initialized and are in temporal dead zone until declared.