// Object
// Object: Used to store data/information in key value pairs in structural way/form


// 1. Object & CURD(Create Read Update Delete) Operations

//1.1 Object Creation

// const user = {
//    name: "Rohit",
//    "age": 20,
//    emailId: "negi@gmail.com",
//    amount: 3400,
//    "home address": "dwarka"   // When we have spacing in key then we have to use this format for writing the key 
// }

// All keys of object are stored as a string in memory

// console.log(user);
// console.log(typeof  user);

//1.2 Accessing/Reading values of object

// console.log(user.name);
// console.log(user.age);
// console.log(user.emailId);
// console.log(user.amount);

// console.log(user["name"]);
// console.log(user["age"]);
// console.log(user["home address"]); // When we have spacing in key then we have to use this format for accessing the value of key


//1.3 Updating existing value of property(key) of object or Inserting new property(key) with value in object

// user.aadhar = 1234; // Checking property(key) named "aadhar" exist or not. Not existed that's why JS creats/adds new property(key) in object named "user". Simply, creating/adding new property(key) in object named "user".
// user.amount = 5000; // Checking property(key) named "amount" exist or not. Existed that's why JS updates existing property(key) or value of existing property(key) in object named "user". Simply, updating existing property(key) or value of existing property(key) in object named "user".
// console.log(user);


//1.4 Deleting values of object

// delete user.emailId;
// console.log(user);









//2. Operations on object

//2.1 Copy by refrence code explaination
// const user = {
//    name: "Rohit",
//    age: 20,
//    emailId: "negi@gmail.com",
//    amount: 3400,
// }

// const user2 = user; //copy by reference means "user2" & "user" are pointing the same object
// user2.age = 90;
// console.log(user);


//2.2 Properties/operations of finding/printing only keys & only values of an object

// const user = {
//    name: "Rohit",
//    age: 20,
//    emailId: "negi@gmail.com",
//    amount: 3400,
// }
// console.log(Object.keys(user)); // created an array & put all keys in that array
// console.log(Object.values(user)); // created an array & put all values in that array
// console.log(Object.entries(user)); // created an array and put each key & value in sub-array of that array



//2.3 Iterating in an object

//2.3.1 for-in loop

// const user = {
//    name: "Rohit",
//    age: 20,
//    emailId: "negi@gmail.com",
//    amount: 3400,
// }

// for(let keys in user){
//     console.log(keys, user[keys]);
// }



//2.3.2 for-of loop

//We can't apply for-of loop in an object directly, we need an array for applying for-of loop

// const user = {
//    name: "Rohit",
//    age: 20,
//    emailId: "negi@gmail.com",
//    amount: 3400,
// }

// const temnparr = Object.keys(user);
// console.log(temnparr)
// for(let keys of temnparr){
//     console.log(keys);
// }

// for(let values of Object.values(user)){
//     console.log(values);
// }

// for(let [keys,values] of Object.entries(user)){   //here destructuring of array happens after "let" & before "of"
//     console.log(keys, values);
// }
// //or
// for(let entry of Object.entries(user)){
//     console.log(entry);
// }



//2.4 Destructuring the object

// const user = {
//    name: "Rohit",
//    age: 20,
//    emailId: "negi@gmail.com",
//    amount: 3400,
// }

// Not good way
// const name = user.name;
// const age = user.age;
// console.log(name, age)

// Object destructing or shorthand of above method/code
// const {name,age} = user;
// console.log(name, age)

// const {name:userName,age:userAge} = user; // Accessing key "name" & "age" on the basis of "userName" & "userAge" respectively
// console.log(userName,userAge);

//2.4.1 Array Destructuring
// const arr = [10,20,40,90,11];
// const [first, second]= arr;
// console.log(first, second)





//3. Creating functions/methods inside object

// const user = {
//    name: "Rohit",
//    age: 20,
//    emailId: "negi@gmail.com",
//    amount: 3400,
//    greeting: function(){
//     console.log("Strike is coming on 18 october");
//     return 20;
//    }
// }

// user.greeting();
// const va = user.greeting();
// console.log(va);

//Working

/*
"user.greeting();" firstly prints data written inside "console.log()" which is "Strike is coming on 18 october"
then, it returns 20 which is stored in variable "va" then, variable "va" is printed using console.log()
*/






//4. Significance of "this" keyword

//4.1 "this" keyword

// const user = {
//    name: "Rohit",
//    age: 20,
//    emailId: "negi@gmail.com",
//    amount: 3400,
//    greeting: function(){
//     console.log(`Strike is coming on 18 october ${this.name}`); //Here, "this" keyword contains the reference of object named "user"
//     return 20;
//    }
// }

// /*If we calling a function written inside an object then, "this" keyword written inside that function 
// is contains the reference of that object which is used to call that function.*/

// user.greeting();
// const va = user.greeting();
// console.log(va);


//4.2 Why use "this" keyword, if we use "object" name

// const user = {
//    name: "Rohit",
//    age: 20,
//    emailId: "negi@gmail.com",
//    amount: 3400,
//    greeting: function(){
//     console.log(`Strike is coming on 18 october ${user.name}`); //if we use "object" name
//     return 20;
//    }
// }

// const user2 = {
//     name:"Mohan",
//     account:201,
// }

// user2.greeting = user.greeting;
// //After "user2.greeting = user.greeting;" this happens, "user2" look like this 

// /*
// const user2 = {
//     name:"Mohan",
//     account:201,
//     greeting: function(){
//     console.log(`Strike is coming on 18 october ${user.name}`);
//     return 20;
//    }
// }
// */



// user2.greeting(); //output: Strike is coming on 18 october Rohit    
// //But expected output: Strike is coming on 18 october Mohan         ----->not possible because of "user" object


// const va = user.greeting();
// console.log(va);



//5. Nested Object & Creating Shallow/Independent Copy

// Shallow Copy: It created the independent copy of an object(only at 1-level) & doesn't create the independent copy of nested object (doesn't handles nested object) 

// const user = {
//    name: "Rohit",
//    age: 20,
//    emailId: "negi@gmail.com",
//    amount: 3400,
//    address: {
//     city:"kotdwar",
//     state:"Uttarkhand"
//    }
// }

// console.log(user.address.city);

// const user2 = {...user}; //Creating shallow copy


// user2.name = "Mohan";
// //Change only in "user2" 
// console.log(user2);
// console.log(user);


// user2.address.city = "Dwarka";
// //Change in both "user" & "user2", because it doesn't handles nested object, handles only one level object
// console.log(user2);
// console.log(user);







//5. Deep Copy : It created the independent copy of an object(at every-level) & also create the independent copy of nested object (also handles nested object easily)

// const user = {
//    name: "Rohit",
//    age: 20,
//    emailId: "negi@gmail.com",
//    amount: 3400,
//    address: {
//     city:"kotdwar",
//     state:"Uttarkhand"
//    }
// }

// const user2 = structuredClone(user); //Creating deep copy

// user2.address.city = "Dwarka";
// //Change only in "user2"
// console.log(user);
// console.log(user2);


//limitations of structuredClone() homework




//6. 

// Key: Key can be String or Symbol 
// or Key can be stored in memory as a String or Symbol 
// or key can be treaded as Symbol or String

// const sym = Symbol("id");

// const user = {
//     name:"Rohit",
//     age:20,
//     0: 100,
//     2: "Mohan",
//     "4": "Apple",
//     [sym]:"Hello Ji"  //Notation for writing key "sym" as an symbol not string on "user" object
// }

// //Accessing Symbol "sym"
// console.log(user[sym]);

// console.log(user[0]);
// console.log(user["2"]);
// console.log(user[4]);
// console.log(user["4"]);
// console.log(user["0"]);
// console.log(user["name"]);





//7. Proof "Array is an object in JavaScript"

// const arr = [10,20,30,40];

/*Array "arr" stored in the form of object shown just below, that's why number as a key is allowed in
object*/

// {
//     0:10,
//     1:20,
//     2:30,
//     3: 40
// }













////////CONTINUE FROM 104 LINE & 25.52 MM:SS VIDEO