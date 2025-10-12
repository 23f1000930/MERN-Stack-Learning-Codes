// Number

// let a = 10;
// let b = 345.6821;

// // toFixed(): used to format a number to a specified number of decimal places and returns the result as a string.
// let c = b.toFixed(1);

// console.log(c);
// console.log(typeof c); // string

// console.log(b.toPrecision(4));
// console.log(b.toString());
// console.log(b.valueOf());










// Number created as an object

// simple way to store a number
// let c = 20;
// console.log(typeof c);

// no. as an object
// let a = new Number(20);
// let b = new Number(20);
// let d = a;

// console.log(a);
// console.log(b);
// console.log(d);

// console.log(typeof a);
// console.log(typeof b);
// console.log(typeof d);

// console.log(a==b); // false, because, reference of "a" & "b" are different means "a" & "b" pointing different objects 
// // Comparision b/t objects happens in terms of reference(location/memory address) that they are pointing are same nor not
// // If refernce is same then both objects are equal otherwise not equal

// console.log(a==d); // true


// Why no use "new Number()", because of wired behavior
// console.log(Boolean(null)); // false, type of null is object & their reference(memory address) is not exist
// console.log(Boolean(0)); // false
// console.log(Boolean(10)); // true
// console.log(Boolean(new Number(0))); // true, because reference exist (check on the basis of reference)
// console.log(Boolean(new Number(10))); // true, because reference exist (check on the basis of reference)
// console.log(Boolean({})); // true, because reference exist (check on the basis of reference)
// console.log(Boolean({name:"Rohit"})); // true, because reference exist (check on the basis of reference)
// console.log(Boolean([])); // true, because reference exist (check on the basis of reference)

// Non Primitive Data Types: Reference ke bases pe compare/convert/copy hoge
// Primitive Data Types: Copy by value/ value ke basis par compare/convert/copy hoge

// let a = 10;
// let b = a; // b=10
// // memory location/address of "a" & "b" are different 
// console.log(a==b); // true, comparision happens on the basis of values because "a" & "b" are primitive data types
















//Object Comparision

// Comparision b/t objects happens on the basis (in terms) of reference(location/memory address) that they are pointing are same nor not
// If refernce is same then both objects are equal otherwise not equal

// let obj1 = {
//     name:"Rohit"
// }

// let obj2 = {
//     name:"Rohit"
// }

// console.log(obj1==obj2); // fasle, because refernce that obj1 & obj2 are pointing are different

// let obj3 = obj1; // Both obj1 & obj2 are pointing same reference
// console.log(obj1==obj3); // true, because refernce that obj1 & obj3 are pointing are same















// "Math" is an object in javascript

// console.log(Math.abs(-4));
// console.log(Math.PI);
// console.log(Math.LN10);
// console.log(Math.SQRT2);
// console.log(Math.ceil(6.3));
// console.log(Math.floor(6.3));
// console.log(Math.log10(20));
// console.log(Math.max(20,11,3421,12));

// About "Math.random": It will generate value between 0 and 1, where 0 is included but 1 is not included
// console.log(Math.random()); // range [0,1)


// Satebaaji ek game banata:(0-9)

// console.log(Math.floor(Math.random()*10)+1); // range [1,10]
// console.log(Math.floor(Math.random()*6)+1);  // // range [1,6]
// console.log(Math.floor(Math.random()*11)+15) // // range [15,25]

//General Formula 1:  Math.floor(Math.random()*totalNumberOfOutcome)+shift
//General Formula 2: Math.floor(Math.random()*(max-min+1))+min

// OTP Generate: 4 digit: 1000-9999
// console.log(Math.floor(Math.random()*(9999-1000+1))+1000);


// Time ke basis par seed ko lene se input predict ho sakta he jisse se output predict ho sakta he kyonki time same chal raha he
// crypto library seed ko he random kar deti he