// variable ko kaise banate hai

// let name = "Rohit";
// let age = 20;

// if(true){
//    let c = 90;
// }

// age = 30;
// console.log(c);  // error because variable "c" is block scoped & "c" is not accessible outside "if" block
// console.log(name , age);

// const account = 1234;
// // account = 23; // error, because variable declard by "const" does not allow to change its value

// console.log(account);







// old tarika
// var a = 10;
// a = 20;
//console.log(a);








//Difference b/w "let" & "var"


//1.

// //Error, because by using "let" keyword we can't declare same variable more than one times
// let m=30;
// let m=40; // Error
// console.log(m)


// //No Error, because by using "var" keyword we can declare same variable more than one times
// var n=30;
// var n=40; // No, Error
// console.log(n)

//Conclusion:
// We can declare a variable using "let" or "const" keyword but we can't redeclare it.
//We can declare a variable using "var" keyword and also we can redeclare it.







//2.

// if(true){
//    let b = 90;
//    console.log(b);  //Run
// }
// console.log(b);  //Error, b is not defined


// if(true){
//    var a = 20;
//    console.log("Inside Condition:",a);  //Run
// }
// console.log("Outside Condition",a);   //Run


// function fun(){
//    var c = 40;
//    console.log("Inside Function:",c);  //Run
// }
// fun(); 
// console.log("Outside Function:",c);  //Error, c is not defined

//Conclusion:
// Variable declared using "let" & "const" are functional & block scoped, which means if we declare 
// variable using "let" or "const" keyword then inside a block(conditional/non-nonconditional) or
// function then, life of that variable ends after end of that block or function & that variable can 
// be accessible inside the block or function only & not accessible outside that function or block.











// Global Scoped

// var b = 30;
// console.log(c);












// data types

//1. primitive data type

// number(including floting points)(8 bytes), string("apple" ), boolean(true/false) (1byte), undefined, 
// null, bigint, symbol

//***JavaScript will automatically decide, the datatype of variable based on the value stored/assigned.

//1. number

// let a = 10;
// let b = 2.36;
// console.log(a,b);
// console.log(typeof b);



//2. string

// let c = "Strike is coming";
// let d = 'Anjali';
// console.log(typeof d);
// console.log(c,d);




//3. boolean

// let login = true;
// let f = false;
// console.log(typeof f);
// console.log(login, f);




//4. undefined

// let user;
// console.log(typeof user);
// // const p;

// console.log(user);

//Conclusion:
// If we declare a variable & not assigned any value to that variable then by default the type of that
// varable is "undefined" & value of that variable is "undefined".

// But, for variable declared using "const" we have to assign value to that variable at the time of 
// declaraton otherwise it will give error




// 5. bigint

// let num = 23216378261783213461n;
// console.log(typeof num);
// console.log(num);






// 6. null

// let weather = null;
// console.log(typeof weather);  // type=> "object" not "null" , its a lagecy bug in Js




// "null" VS "undefined"

// let weather = current_weather("Dwarka")

//Posssible Output
// 25
// null  ----> Not able to find temperature
// undefined  ------> "Dwarka" not exist in db







//7. symbol : used to create unique value of a value specified in "Symbol" keyword's braces

// const id1 = Symbol("id");
// const id2 = Symbol("id");
// console.log(typeof id2);
// console.log(id2==id1); //compaision operator









// Non-Primitive Data type
// array, object, function


//1. array

// let arr = [10,20,11,"Rohit",true];
// console.log(typeof arr);  // object

// console.log(arr);




//2. objects => {key: value}, creates the meaning of variable

// let user = {
//     name:"Rohit",
//     account:12312,
//     age:18,
//     category:'gen'
// }
// console.log(user);
// console.log(typeof user);  //object







// 3. Function

// function sub(){
//     console.log("Subtraction");
// }

// sub();


// // we can store a funtion inside a variable in JavaScript
// let s = function add(){
//     console.log("Hello");
// }
// s()
// console.log(s);
// console.log(typeof s);  //Actusl type is "object" but, it is shown in as "function"
// console.log(s());













// Primitive data type is immutable(non-changeable)


// we write let a = 10;, memory block is created for the value 10, and the variable "a" points to it. 
// If we later write a = 20;, a new memory block is created for the value 20, and "a" now points to 
// this new block, while the old block containing 10 remains unchanged.

// let a=10
// a=20
// a='KKK'
// console.log(a);








// Prove

// let str = "Rohit";
// str[0] = 'M'  // operation rejected,immutable => no, change in same memory location
// console.log(str); //output: "Rohit" not "Mohit"

// str = "Mohan";
// console.log(str); // new memory location/block is created for "Mohan" & str points to this new memory location/block








// Non-primitive data type is mutable(changeable)



// Array

// let arr = [10,20,30,40];
// arr.push(90);
// arr[0] = 70;
// console.log(arr);



// Object

// let obj ={
//     name:"Mohan",
//     age:20
// }

// console.log(obj);
// console.log(obj.name);

// obj.name = "Rohan"
// console.log(obj);












// Understanding Memory Allocation more Deeply



//Array

//Copy/pass by value

// let a = 10;



//"a" & "b" have same value, but pointing different memory locations( reference)
// let b = a; //b=10,  allocation of new memory location, separate copy of 10 is formed by value only not reference, 



// b = 20;  //again, allocation of new memory location
// console.log(a,b);  // a=10 b=20










//Objects


//Copy/pass by REFERENCE

let obj ={
    name:"Mohan",
    age:20
}


// Here, reference is copied, means "obj" points to a particular memory location(reference), 
// but by just below code now "obj2" is pointing to the same memory location(reference) as of "obj".
// No separate copy is formed.
// "obj" & "obj2" are pointing & have the same data/value because of same memory location(reference)
let obj2 = obj; 


obj2.name = "Rohan";
console.log(obj);  // "obj" is now changed because of "obj2"





//Conclusion:
// all premitive data types have pass by value feature because thses data types consume less memory
// all non-premitive data types have pass by reference featurw because these data types consume high memory