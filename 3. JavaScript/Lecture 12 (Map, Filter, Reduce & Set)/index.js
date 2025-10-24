// forEach, filter, reducer, map, set
// object is the heart of JS

// 1. forEach:  arr.forEach((element, index, array) => { ...code... } )   or   arr.forEach(callbackFn)

/*
forEach is used to iterate over each element of an array. It takes a callback function as an argument, which is executed once for each element in the array.
The callback function can take up to three arguments:
- element: The current element being processed in the array.
- index (optional): The index of the current element being processed.
- array (optional): The array that forEach is being applied to.
*/

// const arr = [10,20,30,5,90,87];

// // Basic forEach
// arr.forEach((number, index, arr)=>{
//     console.log(`Element: ${number}, Index: ${index}, Array: ${arr}`);
// })

// // Sum of all elements using forEach
// let sum = 0;
// arr.forEach((number)=>{
//     sum+=number;
// })
// console.log(sum);










// let obj = {
//     name:"Rohit",
//     deposit: function(amount){
//         console.log(amount);
//     }
// }

// obj.deposit(100);


// 2. filter: arr.filter((element, index, array) => { ...code... } )   or   arr.filter(callbackFn)

/*

filter() 
1. Always returns only those elements which satisfies the given condition written/specified in the 
   callback function in NEW array.
2. Existing/original array is not modified/changed.
3. It always returns a new array.
4. The new array may have fewer elements than the original array.
5. No. of elements in new array & original is NOT always equal but elements in new array are 
always from original array but not in the same order & not modified.

If the condition is true, the element is included in the new array; otherwise, it is excluded.

The callback function can take up to three arguments:
- element: The current element being processed in the array.
- index (optional): The index of the current element being processed.
- array (optional): The array that filter is being applied to.

*/
// true: select, false: not selected

// const arr = [10,20,30,5,90,87];
// const newArr = arr.filter((number)=> number>25);
// console.log(newArr);














// 3. Implementing filter function by ourselves

// const arr = [10,20,30,5,90,87];



// // Not necessary to define compare function separately, can be done inline while calling filtering using arrow function
// // So, below two lines are not necessary
// const compare = (number)=> number>25;   
// compare(20);


/*
By writing arr.filtering, we add filtering function only for "arr" array. 
If we want to add filtering function for all arrays, we need to add filtering function to Array.prototype
*/
// Array.prototype.filtering = function(compare){
    
//     const ans = [];
//     for(let num of this){  // 'this' refers to the array on which filtering is called or this = [10,20,30,5,90,87];
//        if(compare(num)){
//         ans.push(num);
//        }
//     }
//     return ans;
// }

// const newArr = arr.filtering((num)=>num>25); // (num)=>num>25 goes in place of "compare" in filtering function
// console.log(newArr);

// const a = [80,30,15,31,42,70]
// const answer = a.filtering((num)=>num>25);  // (num)=>num>25 goes in place of "compare" in filtering function
// console.log(answer);

















// 4. map: arr.map((element, index, array) => { ...code... } )   or   arr.map(callbackFn)
/*
map():
1. Used to iterate over each element of an array
2. Used to transform/modify the array based on the logic defined in the callback function.
3. Always returns the new array.
4. Existing/original array is not modified/changed.

5. No. of elements in new array & original is always equal & same order as elements in original
array but may be modified
or 
It returns the complete array but elements mab e modified as per the logic defined in the callback function.


The callback function can take up to three arguments:
- element: The current element being processed in the array.
- index (optional): The index of the current element being processed.
- array (optional): The array that map is being applied to.

*/

// 4.1 Example 1
// const arr = [10,20,30,5,90,87];
// const newArr = arr.map((num)=> num*3);
// console.log(newArr);


// 4.2 Example 2
// const arr = [10,20,30,5,90,87];
// const newArr = arr.map((number)=> {
//     return number%2 == 0});
// console.log(newArr);




//5 Real World Use Case of map, filter & reduce

const products = [
  // Electronics
  { id: 1, name: "Laptop", category: "Electronics", price: 1200, inStock: true },
  { id: 2, name: "Headphones", category: "Electronics", price: 200, inStock: true },
  { id: 3, name: "Smartphone", category: "Electronics", price: 800, inStock: false },
  { id: 4, name: "Monitor", category: "Electronics", price: 300, inStock: true },
  { id: 5, name: "Keyboard", category: "Electronics", price: 75, inStock: true },

  // Books
  { id: 6, name: "The Hobbit", category: "Books", price: 25, inStock: true },
  { id: 7, name: "A Brief History of Time", category: "Books", price: 30, inStock: true },
  { id: 8, name: "Dune", category: "Books", price: 28, inStock: false },

  // Appliances
  { id: 9, name: "Coffee Maker", category: "Appliances", price: 150, inStock: false },
  { id: 10, name: "Blender", category: "Appliances", price: 80, inStock: true },
  { id: 11, name: "Toaster", category: "Appliances", price: 45, inStock: true },
  { id: 12, name: "Microwave Oven", category: "Appliances", price: 220, inStock: true },

  // Clothing
  { id: 13, name: "T-Shirt", category: "Clothing", price: 20, inStock: true },
  { id: 14, name: "Jeans", category: "Clothing", price: 60, inStock: false },
  { id: 15, name: "Jacket", category: "Clothing", price: 110, inStock: true },

  // Home Goods
  { id: 16, name: "Desk Lamp", category: "Home Goods", price: 35, inStock: true },
  { id: 17, name: "Scented Candle", category: "Home Goods", price: 15, inStock: true },
  { id: 18, name: "Picture Frame", category: "Home Goods", price: 22, inStock: false },

  // Groceries
  { id: 19, name: "Organic Apples", category: "Groceries", price: 5, inStock: true },
  { id: 20, name: "Artisan Bread", category: "Groceries", price: 8, inStock: true }
];

// const newProduct = products.filter((product)=> product.price>50).sort((a,b)=>b.price-a.price).map((product)=> ({name:product.name, price:product.price}));
// console.log(newProduct);

// const ans = products.map((product, index, completeProductArr)=> ({name:product.name, price:product.price}))
// console.log(ans);


//5.1 reduce

// accumulator = sum =0, 
// accumulator = 1400
// // [{item:"Bhindi",price:200},{item:'sonpapdi,price:40},{}]
// const totalPrice = products.reduce((accumulator,currenValue)=>{
//     if(currenValue.inStock)
//     return accumulator+currenValue.price;
//     else
//     return accumulator
// },0);

// console.log(totalPrice);














// 6. Data Structure: set
/*
Set is a built-in JavaScript object that allows you to store unique values of any type, 
whether primitive values or object references.
or
A Set is similar to an array, but it only allows unique values, meaning that duplicate 
values are automatically removed.
or
A Set in JS is similar to an array which only allows unique values.
*/

// 6.1 Creating a Set
// const s2 = new Set();
// s2.add(100);
// s2.add(200);
// s2.add(300);
// s2.add(100); // duplicate, will not be added
// console.log(s2);






//6.2 Set Methods
// const arr = [10,20,30,10,25,15,10,20];
// // console.log(arr);

// const s1 = new Set(arr); // creating set from array or set can be initialised with an array
// s1.add(11);              // adds 11 to set
// console.log(s1);

// console.log(s1.has(23)); // checks if 23 is present in set or not

// console.log(s1.size);    // gives size of set

// s1.delete(10);           // deletes 10 from set
// console.log(s1);

// s1.clear();              // clears the set
// console.log(s1);






// 6.4 Real World Use Case of Set

// const users = [
//   { id: 1, name: "Alice", role: "admin" },
//   { id: 2, name: "Bob", role: "user" },
//   { id: 3, name: "Charlie", role: "user" },
//   { id: 4, name: "David", role: "admin" },
//   { id: 5, name: "Eve", role: "user" }
// ];

// // Using Set to get unique user roles
// const userRoles = new Set(users.map(user => user.role));
// console.log(userRoles); // Output: Set { 'admin', 'user' }

// // Converting Set back to Array
// const uniqueRolesArray = Array.from(userRoles);
// console.log(uniqueRolesArray); // Output: [ 'admin', 'user' ]










// 6.5 Real World Use Case of Set

// const email = ["ro@gm","ra@gm","mo@gm","ro@gm"];
// const uniqueEmail = [...new Set(email)];
// console.log(uniqueEmail);


// const s1 = new Set(email);
// for(let num of s1){
//     console.log(num);
// }


















// 7. Data Structure: Map
/*
A Map is a built-in JavaScript object that allows you to store key-value pairs, where both keys 
and values can be of any data type. Specially, key can be of any data type 
(string, number, object, array etc.).
or
A Map is similar to an object, but it provides better performance for frequent additions 
and removals of key-value pairs, and it maintains the order of insertion.
*/


const m1 = new Map([
    ["Rohit", 40],
    [2, "Rohit"],
    [true, 11],
    [[10,30,11], "Mohit"]
]);
console.log(m1);

m1.set({name:"Manish",age:20}, false);  // adding new key-value pair
console.log(m1);

console.log(m1.has(2)); // Checks if key 2 is present or not
console.log(m1.get(2)); // Gives value corresponding to key 2

console.log(m1.size);   // Gives size of map


// Iterating over map
for(let [keys,value] of m1){
    console.log(keys, value);

}