//  function

//function is used to reuse a block of code multiple times without rewriting it every time.

//1. Function Declaration

// function greeting(){
//     console.log("Hello Coder Army, Strike is coming on 18 october");
//     return 10;
// }

// greeting()

// console.log(greeting)  //JS stores the function definition(its reference) in the variable "greeting" so that we can call it later.

// console.log(greeting()) // We can call the function by using its name followed by parentheses.
// /* If we do not return anything with greeting function then we also get "undefined" in output of
// "console.log(greeting())" because by default a function returns "undefined" if there is no 
// return statement.*/

// // We can also store the return value of the function in a variable.
// const result = greeting();
// console.log(result); // This will print 10, which is the return value of the greeting function.








//2. Parameter & Arguments

// Parameters are the variables that are used in the function declaration.
// Arguments are the values that are passed to the function when it is called.

// here, num3=0 and num4=0 are parameters with default values.
// When we call the function, we can pass arguments to it.
// If we don't pass any arguments, the default values will be used.

// function addNumber(num1,num2,num3=0,num4=0){
    
//     const sum = num1+num2+num3+num4;
//     console.log(sum);
// }

// addNumber(3,4);
// addNumber(6,7);
// addNumber(6,7,8);  //8 is not passed to the function because we have defined only 4 parameters.
// addNumber(6,7,8,9);
// addNumber(7,8,12,12,11,12,41,12)

// So, for handling multiple arguments in function efficiently we have to use Rest Operator.


//3. Rest Operator

/*Rest operator allows us to pass an arbitrary(any) number of arguments to a function without defining parameters for each one of them.
Then, it collects all arguments into an array.*/

/*or Simply by using rest operator we can give multiple arguments to a function without defining parameters for each one of them.
and rest operator put those arguments into an array.*/

// function addNumber(...num){ //"num" is an array which stores all arguments
   
//     let sum=0;

//     for(let n of num){
//         sum+=n;
//     }

//     console.log(sum);
    
// }


// addNumber(6,7);
// addNumber(6,7,8);
// addNumber(6,7,8,9);
// addNumber(7,8,12,12,11,12,41,12)




//4. Difference bwtween Rest Operator & Spread Operator

//Spread Operator: It is used to spread the elements of an array or object into individual elements.
//Rest Operator: It is used to collect multiple elements into a single array or object.

//4.1 Destructing Example
// const arr = [10,20,30,40,50];
// const [first,second] = arr; //Destructuring of an array means extracting values from array and storing them in variables.
// console.log(first,second);

//4.2 Rest Operator Example in Array

// const arr = [10,20,30,40,50];

// // Here, the rest operator collects/catches all remaining elements of `arr` into the `num` array.
// const [first,second, ...num] = arr;
// console.log(first,second, num);



//4.3 Spread Operator Example in Array

// Spread operator expands an array/Object into individual elements.
// Example: use spread to merge arrays into a single array.

// const arr = [10,20,30,40,50];
// const arr2 = [30,70,90,10]

// const ans = [...arr, ...arr2];
// console.log(ans);





//5. Function Expression : Making a function in the form of expression

// A function expression is a way to define a function using an expression.
// Function expressions can be anonymous (without a name) or named.


//5.1 Function Definition/Declaration in Ordanary Way
// console.log(addNumber(3,4));

// function addNumber(num1,num2){
//     return num1+num2;
// }
// console.log(addNumber(3,4));

/*Here. we can call function "addNumber()" after & before its definition because of
"Function Hoisting". */




// 5.2 Function Expression Example

// console.log(addNumber(3,4));   // This will give error because function expressions are not hoisted.

// const addNumber =function(num1,num2){  // a variable can also hold a function
//     return num1+num2;
// }
// console.log(addNumber(3,4));








//6. Arrow Function

// Arrow functions provide a more concise syntax for writing function expressions.
// They are often used for shorter functions or when working with higher-order functions.

// ()=>{

// }

//6.1 Example 1

// const addNumber = (num1,num2)=>{
//    return num1+num2;
// }
// console.log(addNumber(3,4));



//6.2 Example 2: If we are returning something then "curly braces" & "return" keyword is not necessary/required

// const addNumber = (num1,num2) => num1+num2;
// console.log(addNumber(3,4));


//6.3 Example 3:

// let arr = [10,11,19,7,50];
// arr.sort((a,b)=>b-a);
// console.log(arr);


//6.4 Example 4:

// if we have single parameter, no need of this ()
// const squareNumber = num => num*num;  // or const squareNumber = num => (num*num);
// console.log(squareNumber(6));





//7. HANDLING OBJECTS IN ARROW FUNCTION

//7.1

// const greeting = ()=> {
//     let user = {
//         name:"Rohit",
//         age:20,
//     }
//     return user
// }
// console.log(greeting())




//7.2

// const greeting = ()=> {
//     return {
//         name:"Rohit",
//         age:20,
//     }
// }

// console.log(greeting())


//7.3

// const greeting = ()=> ({ name:"Rohit",age:20});
// console.log(greeting());


//In an arrow function, after arrow("=>") if we write curly braces("{}") then we have to use "return" keyword to return something.
//But if we directly return an object then we have to wrap that object in parentheses("()") to avoid syntax error.






//8. IIFE(Immediately Invoked Function Expression)

// An IIFE is a function that is defined and immediately invoked (called) after its creation.
// This function has two parts: the function definition () and the function invocation ().
// The function is wrapped in 1st parenthesis & 2nd parenthesis is used to invoke/call the function immediately after its definition.
//()();

//8.1 IIFE on Odinary Function
// (function greeting(){
//     console.log("Helloji");
// })();


//8.2  IFFE Arrow Funtion
// (()=>{
//     console.log("hi");
// })();




//9. Callback Function

/* A callback function is a function that is passed as an argument to another function and is 
executed after some operation is completed.*/

//9.1 Example 1

// function greet(){
//     console.log("Hello Ji, Kaise ho")
// }

// function meet(callback){
//     console.log("I am going to meet someone");
//     callback();
// }

// // Here, we are passing the "greet" function as a "reference" argument to the "meet" function.
// meet(greet);  // meet(greet())  ====> not used because if we do this then greet function will be called/executed immediately which is not desired.

/* Here, when greet function is passed as a reference to meet, it is invoked inside meet 
via callback().*/






//9.2 Example 2

// function greet(){
//     console.log("Hello Ji, Kaise ho")
// }

// function dance(){
//     console.log("I am dancing");
// }

// function meet(callback){
//     console.log("I am going to meet someone");
//     // dance();-----> hardcode bu we have to make it reusable
//     // code hota
//     callback();
//     console.log("I have finished meeting");
// }

// meet(greet);
// meet(dance);










//10. Real Life Example of Callback Function

// Callback function is use to make a function flexiable & reusable in real life scenarios.

// Example: Payment Gateway System

// function blinkitOrderPlaced(){
//     console.log("We have started packing your Order");
// }

// function zomatoOrderPlaced(){
//     console.log("We have started preparing your food");
// }

// function payment(amount,callback){
//     console.log(`${amount} payment has initilized`)
//     console.log("Payment is received");
//     callback();

//     // GST: Government
//     // Rider ko kitna payment dena
//     // company ko kitna 
// }

// payment(500,zomatoOrderPlaced);
// payment(300,blinkitOrderPlaced);