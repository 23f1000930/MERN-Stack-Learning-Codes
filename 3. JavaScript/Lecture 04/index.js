// Operator



// Arithmetic 

// console.log(2+5);
// console.log(2-5);
// console.log(2*5);
// console.log(6/2);
// console.log(5%2);  // Reminder
// console.log(5**3); // 5*5*5=125









// Assignment operator

// let x = 20;
// let y = 10;

// x = x+y;
// console.log(x);

// x = x-y;
// console.log(x);

// x = x*y;
// console.log(x);

// x+=y; // x=x+y
// console.log(x);

// x-=y; // x=x-y
// console.log(x);

// x*=y; // x=x*y
// console.log(x);

// x%=y; // x=x%y
// console.log(x);















// comparison operator

// let x = 20;
// let y= 10;

// console.log(x>y);
// console.log(x>=y);
// console.log(x<y);
// console.log(x<=y);
// console.log(x==y); // loose check, "false"
// console.log(x===y); // strict check, "false"

// let p=20;
// let q="20";
// let r="20";
// console.log(p==q); // "true" because, when we do number and string comparision then javascript converts string into number
// console.log(p===q); // "false"
// console.log(q===r); // "true"

// "==" -----> compare directly on values if both are same types, if not then converts one value into same type as other value then do comparision 
// "==" -----> simple comparision, if one value is of "string" type then convert it into number then do comparison  
// "===" ----> checks type of both value (if same), then apply comparison on both values or type check(dono same type ke hone chaiye ===, uske baad wo comparison), otherwise it will give "false" as a result











// String--> Number, Conversion

// let z = "120";
// let a = Number(z);
// console.log(a);
// console.log(typeof a);


// NaN: Not a number(Type of it is number)

// let c = "121ac";
// let b = Number(c);

// console.log(b);   // NaN
// console.log(0/0); // NaN
// console.log(typeof b);
















// let a = true;
// console.log(Number(true)); // "1"
// console.log(Number(false)); // "0"

// console.log(Number(null)); // "0"
// console.log(Number(undefined)); // "NaN" because we have not assigned any value













// Number -> String
// let a = 10;
// let b = String(a);

// console.log(b);
// console.log(typeof b);


// console.log(String(true));
// console.log(typeof String(true));

// console.log(String(false));
// console.log(typeof String(false));

// console.log(String(null));
// console.log(typeof String(null));

// console.log(String(undefined));
// console.log(typeof String(undefined));












// Boolean convert karunga

// console.log(Boolean(10));
// console.log(Boolean(-6));
// console.log(Boolean(0)); // only "0" will give "false" value and rest of the values(+ve & -ve) will give "true" value

// console.log(Boolean("hello")); // true, non-empty string will always give "true" value
// console.log(Boolean(""));      // false, empty string will always give "false" value

// console.log(Boolean(null));
// console.log(Boolean(undefined));
// console.log(Boolean(NaN));













// computer science challenge not javascript problem

// let a = 0.1; // this no. stored approx. in binary
// let b = 0.2; // this no. stored approx. in binary

// let c = a+b; // result no. stored approx. in binary

// console.log(c==0.3); // false, because approx. no. is not equal to exact 0.3
// console.log(c);















// Fixed Rule 1: null is loosely equal to undefined only

// console.log(null==undefined);
// console.log(null===undefined);
// console.log(null==0);
// console.log(null=="");
// console.log(null==false);
// console.log(null==true);






// Fixed Rule 2: If we have one of these operators in our code >,<,>=,<= then, null --(convert)--> number & undefined --(convert)--> NaN
// "NaN" is a special type of number

// console.log(null>=0);
// console.log(null<=0);
// console.log(null>0);
// console.log(null<0);
// console.log(null>=undefined);
// console.log(undefined>=0);
// console.log(undefined<=0);
// console.log(undefined>0);
// console.log(undefined<0);














// Fixed Rule 3 (String Comparision/Type Conversion): Here, comparision happens by ASCII value

// console.log("Rohit">="Mohit") // true, ascii(R)>ascii(M)
// console.log("Rohit">="mohit")
// console.log("Rohit">"Rahit");

// console.log(10>"10");
// console.log(10>="10"); // string "10" --convert--> number to perform comparision

// console.log(10<true);
// console.log(10>=true);

// console.log(null>"")
// console.log(null>=""); // null becomes 0 & "" becomes 0
// console.log(NaN == NaN); // false

//Conclusion:
// If we compare different data types then, firstly both are converted into number after that comparision begins 
// or Ek koi bhi type hai, usko agar muje compare karna hai dusre kisi type se, Dono number mein convert honge
















// loop kaise kaam karte hai



// for loop

// post increment: i++
// post decrenment: i--

// for(let i = 0; i<10;i++){
//     console.log(i);
// }






// while loop

// let i = 0;

// while(i<10){
//     console.log(i);
//     i++;
// }






// do while: here, break condition checks at last

// let i= 0;

// do{
//     console.log(i);
//     i++;
// }while(i<10);













// if else condition




//simple example 

// let age = 25;

// if(age>=18){
//     console.log("Eligible for vote");
// }
// else{
//     console.log("Not eligible for vote");
// }






// kid, young and old checking using if-else condition


// let age = 78;

// if(age<18){
//     console.log("Kid");
// }
// else if(age>=60){
//     console.log("Old");
// }
// else{
//     console.log("young");
// }














// Logical Operator



// logical (operator) "&&" (and) 

// console.log(true&&true);
// console.log(true&&false);
// console.log(false&&false);
// console.log(false&&true);


//case 1:
// let a = "Rohit";
// let b = "Mohit";
// let c = a&&b;  // "a" becomes "true" then "Mohit" stored in "c"
// console.log(c); // Mohit


//case 2:
// let a = "";
// let b = "Mohit";
// let c = a&&b; // "a" becomes "false" (because of empty string) then ""(value of "a") stored in "c"
// console.log(c); // ""


//case 3:
// let a = "Rohit";
// let b = "";
// let c = a&&b; // "a" becomes "true" then ""(value of "b" same as case 1) stored in "c"
// console.log(c); // ""


//case 4:
// let a = 0;
// let b = 20;
// console.log(a&&b);

//Conclusion About "&&" operator:
// &&: If first value is false, it will return the first value itself
// If first value is true, it will return second value







// logical (operator) "||" (or)


// console.log(true||true); // 1st value true then return 1st value
// console.log(true||false); // 1st value true then return 1st value
// console.log(false||false); // 1st value false then return 2nd value
// console.log(false||true); // 1st value false then return 2nd value

//case 1:
// let a = 10;
// let b = 20; 
// console.log(a||b); // 1st value true then return 1st value 10


//case 2:
// let a = 0;
// let b = 20;
// console.log(a||b); // 1st value false then return 2nd value 20


//Conclusion About "||" operator:
// ||: If first value is true, it will return the first value itself
// If first value is false, it will return second value












// logical (operator) "!=" (not equal to)

// console.log(4!=5);
// console.log(5!=5);





// AND: & , | or

console.log(2&3);
console.log(2&5);