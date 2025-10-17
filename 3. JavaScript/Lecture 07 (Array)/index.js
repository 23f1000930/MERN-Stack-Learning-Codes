// Array;

// 1. Why array?

// let marks1 = 100;
// let marks2 = 50;
// let marks3 = 70;
// let marks4 = 80;


// let marks = [100,50,70,80,90];
// console.log(marks);
// console.log(marks.length);





// 2. Array Operations

//We can store(put down) multiple/heterogeneous data types in an array
// let arr = [100,30,"Rohit",true];
// console.log(typeof arr);


// 2.1 Accessing an element of an array
// let arr = [100,30,"Rohit",true];
// console.log(arr[2]);



//2.2 Changing the value of an element of an array as array is mutable
// let arr = [100,30,"Rohit",true];
// arr[1] = 90;
// console.log(arr);



//2.3 push() & pop()

// let arr = [100,30,"Rohit",true];
// console.log(arr)

// // push(): Used for adding an element at the end of an array or used for inserting an element at end of an array
// arr.push(90);
// arr.push("Strike");
// console.log(arr);

// // pop(): Used for deleting an element at the end of an array
// arr.pop();
// console.log(arr);



//2.4 unshift() & shift()

// let arr = [100,30,"Rohit",true];
// console.log(arr)

// // unshift(): Used for adding an element at the beginning of an array or used for inserting an element at beginning of an array
// arr.unshift(10);
// arr.unshift(50);
// console.log(arr);

// // shift(): Used for deleting an element at the beginning of an array
// arr.shift();
// console.log(arr);


//2.5 Iteration on an array or printing elements of an array one-by-one 
// let arr = [10,30,50,90,11];

// for(let i=0;i<arr.length;i++){
//     console.log(arr[i]);
// }

// for(let num of arr){
//     console.log(num);
// }



//2.6 slice([starting index], [ending index]+1) & splice([starting index], [no. of elements to remove])

// const arr = [10,30,50,90,11];

// // slice([starting index], [ending index]+1): slice the array & original doesn't change after applying this operation
// const arr2 = arr.slice(2,4);
// console.log(arr2);
// console.log(arr);   //original doesn't change after applying this operation


// // splice([starting index], [no. of elements to remove]):(do changes in original array) slice the array & change the original after applying this operation
// //or removes those elements from original array which are specified using indexes in splice() 

// const arr3 = arr.splice(1,3);
// // const arr3 = arr.splice(1,3,"Rohit",19);  // means, remove 3 elements starting from index 1 from original array "arr" then, insert "Rohit" & 19 in that place in original array "arr"
// console.log(arr3);
// console.log(arr) // elements from 1-3 indexes are removed from original array "arr"



//2.7 toString() & join([seperator]): Array to string conversion
// const names = ["Alice", "Rohit","Bob","Mohit", "Bob", "Charlie",];

// console.log(names.toString());
// console.log(names.join("-"));




//2.8 Simple Searching
// const names = ["Alice", "Rohit","Bob","Mohit", "Bob", "Charlie",];
// console.log(names.indexOf("Bob"));  // gives index of 1st occourence of "Bob" if not present then give -1
// console.log(names.lastIndexOf("Bob")); // gives index of last occourence of "Bob" if not present then give -1
// console.log(names.includes("Bobs"));  //gives true if "Bob" present otherwise gives false



//2.9 Sorting the array

// sort(): It sorts an array on the basis of ordering(ascii value) of character in ascii table.
// or It sorts an array on the basis of ascii table by treating each element as a string then comparing each string character-by-character on the basis of ascii table

//2.9.1 Soring array of strings
// const names = ["Alice", "Rohit","Bob","Mohit", "Bob", "Charlie",];
// names.sort();       //sort the original array on the basis of character(ascii table of character)
// names.reverse();    //reverse the order of original array
// console.log(names);


//2.9.2 Soring array of numbers getting undesired output
// const a = [101,90,80,32,91];
// a.sort();
// console.log(a); //[ 101, 32, 80, 90, 91 ] because when we apply sort(), it treats every element(even number) as a string then sorts that array on the basis of ordering(ascii value) of character of each string in ascii table


//2.9.3 Soring  an heterogeneous array
// const arr = [10,"Rohit","Mohan",true];
// arr.sort();
// console.log(arr);


//2.9.4 Soring array of numbers in ascending order
// const arr = [10,40,31,71,5,11];
// arr.sort((a,b)=> a-b);
// console.log(arr);
// //arr.sort((a,b)=> a-b);=====> -ve : pehle a aayega fr aayega & +ve: b aayega fr a aayge


//2.9.5 Soring array of numbers in decending order
// const arr = [10,40,31,71,5,11];
// arr.sort((a,b)=> b-a);
// console.log(arr);




//2.10 flat([level no.]): Flatting the array
// flat(): By default flat the array only at one level

// const arr = [10,30,50,[40,90,[60,19,99],11], 80];

// Accessing the element by below method is difficult
//console.log(arr[3][2][1]);  

//Accessing the element by below method is easy by flattering the array
// const a = arr.flat(Infinity); 
// console.log(a);




//3. The Spread Operator

//3.1 Why spread operator

// const arr = [10,30,50,90,11];
// const arr2 = ["Rohit",11,true];
// const arr4 = [90,4,false];


// //Gives undesirable output because here, whole arr2 comes as an elements with elements of arr
// // arr.push(arr2); 
// // console.log(arr);


// const arr3 = arr.concat(arr2,arr4);  // concat() returns new array
// console.log(arr3);

// const arr3 = [arr,arr2,arr4];



//3.2 Spread operator

// const arr = [10,30,50,90,11];
// const arr2 = ["Rohit",11,true];
// const arr4 = [90,4,false];

// const arr_spread = [...arr,...arr2,...arr4];
// console.log(arr_spread);






//4. Why array is not array in JavaScript
// const a = [10,309,"Rohit",9.3, true];
// console.log(a["1"]);

// a.name = "Moahn";
// console.log(a);

//That's why array is not array in JavaScript, it is an object




//5.

// Object(non primitive): Copy by reference hote hai
// Primitive: Copy by value/actual data

// let arr = [10,30,50,90,11];
// let arr2 = arr; // reference is same
// arr2.push(30);
// console.log(arr);




//reference is not changed, that's why below is valid
// const arr = [10,30,50,90,11];
// arr[2] = 30;
// console.log(arr);