//In this lecture, we will learn about scope, closure & higher-order functions in JavaScript.

//1. SCOPE

// let a = 10;
// const b = 20;

// if(true){
//     let d = 30;
    
// }

// function greet(){

//     let c = 30;
//    var e = 90;
// }

// console.log(c);
// console.log(e);
// greet();

/*
Final conclusion about Scope:

1. Variables declared inside a function using let, const or var cannot be accessed from outside the 
function. Such variables have functional scope.

2. Variables declared inside a block (like if, for) using let or const (except var) cannot be 
accessed from outside that block. Such variables have block level scope.

3. EXCEPTION: Variables declared with var inside a block can be accessed from outside that block.

4. Variables declared outside the block or function using let, const or var can be accessed from 
anywhere in the code. Such variables have global scope.

Below three points are valid for let & const
// Global Scope => Accessible to everyone
// Functional Scope => Accesible only inside that function
// Block level Scope => Accesible only inside that Block


Note:
1. let & const respects global, functional & block level scope.
2. var respects only global & functional scope. It does not respect block level scope.
*/ 















//2. 

// let global = 30;

// function greet(){
//     let global = 40;

//     function meet(){
//         let global = 10;
//         console.log(global);
//     }

//     meet();
// }

// greet();

/*
We can declare variables with the same name in different scopes. But, declaration of variable 
with the same name in the same scope is not allowed and will throw an error.

Here, we have three variables with the same name 'global' but in different scopes. When we call greet()
then, meet() is called, it prints value of variable named "global" by finding it in its own scope first.
If it is not found there, then it looks in the outer level scope (greet function's scope) and then in the
global scope.
*/









//3. CLOSURE

// function createCounter(){
    
//     let count = 0;
//     function increment(){
//         count++;
//         return count;
//     }

//     return increment;  // Here, we are returning the reference of "increment" function in "counter".
// }

// // console.log(count); // not accessible

// const counter = createCounter();
// console.log(counter()); // "counter" now holds the reference of "increment" function so we can execute "increment" function directly.
// console.log(counter());
// console.log(counter());

/*
Here, when we call createCounter(), it returns the reference of increment function. So, "counter"
now holds the reference of "increment" function. When we call counter(), it executes increment 
function. 

The important point to note here is that even after the execution of createCounter() is completed,
the variable "count" is still accessible to increment function because of closure. Closure is a 
mechanism that allows a function to access/remembers such variables which this function uses
from its outer scope even after the outer function has finished executing.

Here, increment function forms a closure that captures/access/remembers the variable "count" from its outer 
scope (createCounter function's scope) because increment function uses variable "count".

NOTE: Only a function which uses variables from its outer scope forms a closure or able to 
access/remembers such variables by moving these variables from stack to heap as a context object
internally in memory in case of outer scope is functional scope.

So, every time we call counter(), it increments the value of "count" and returns the updated value.
This is how we can create private variables in JavaScript using closure.
*/










// 4. Closure Example: Bank Account Example (Real World Use Case)

//user method ko access(function)
// balance: usko directly access na access kar paaye


// function createBankAccount(){
//     //Here, balance is a private variable because it is not accessible from outside createBankAccount function.
//     let balance = 500;
    
//     return {
//     deposit: function(amount){
//         if(typeof amount==="number" && amount>0){
//         balance+=amount;
//         return balance;
//         }
//     },
//     withdraw: function(amount){
//         if(typeof amount==="number" && amount>0 && balance>=amount){
//         balance-=amount;
//         return balance;
//         }
//     },
//     getBalance: function(){
//         return balance;
//     }
    
//     }

 
// }

// const customer = createBankAccount();
// console.log(customer.withdraw(200));













//5. Higher Order Functions

/*A function which takes another function as an argument or returns a function as a result is 
called Higher Order Function.*/

//5.1 Function returning another function

// function double(){

//     function execute(){
//         console.log("Hello")
//     }
//     return execute
// }

// const n = double()
// n()
// console.log(n);




//5.2 Function returning another function

// function double(){

//     return function execute(){
//         console.log("Hello")
//     }
// }

// const n = double()
// n()
// console.log(n);




//5.3 Function returning another function

// function double(value){

//     return function execute(num){
//         return num*value;
//     }
    
// }

// // const n = double(20);
// // console.log(n(5));
// //or
// const n = double(20)(5);
// console.log(n);

/*
Here, function double is called with argument 20 which returns execute function's reference in n then
execute function remembers the "value" or 20 from its outer scope using closure because
execute function uses "value" argument or 20 and then execute function is called with argument 5.
So, the final result is 100.
*/
