// String

//1. Ways of creating a string

// Ordinary way for creating a string using "" or ''
// const str1 = "Rohitboy";
// const str2 = 'Rohit Negi';
// console.log(str1, str2);

// Mordern way for creating a string using "backtic"
// const day = 18;
// const str3 = `Strike is 
// coming on ${day}
// `; 

// console.log(str3);
// 1. We can create our sring in multiple lines.
// 2. we can embedded value of variables in string









//2. Prove for immutability (string is immutable)

// const str = `Hello Coder Army`;
// str[2] = "S";
// console.log(str)  // value of "str" is not changed





//3. String Operations


//3.1 Finding Length
// const str = `Hello Coder Army Coder`;
// console.log(str.length)



//3.2 Accessing Elements
// const str = `Hello Coder Army Coder`;
// console.log(str[1]);



//3.3 Upper & Lower Case Conversion
// const str = `Hello Coder Army Coder`;

// const a = str.toUpperCase();
// console.log(a);

// const b = str.toLowerCase();
// console.log(b);



//3.4 indexOf([substring]): Operations on indexing/finding substring
// const str = `Hello Coder Army Coder`;
// console.log(str.indexOf('Cod'));      // if not present then return -1 otherwise index
// console.log(str.lastIndexOf('Cod'));  // if not present then return -1 otherwise index
// console.log(str.includes('cod'));     // if not present then return false otherwise true



//3.5 slice([starting index], [ending index]+1): Operations on slicing/extracting substring
// const str = `Hello Coder Army Coder`;
// first character considered as in 0 index & last character considered as an -1 index

// console.log(str.slice(2,7));   // from 2nd index to 6th index 
// console.log(str.slice(3));     // from 3rd index to end 
// console.log(str.slice(-5));    // from -5th index to end or five last characters
// console.log(str.slice(-5,-2)); // from -5th index to -3 index

// substring() is same as slice() but we can't use -ve index in substring()
// console.log(str.substring(2,5));
// console.log(str.substring(-5)); // not valid output




//3.6 Operations on concatination
// const a = "Rohit";
// const b = "Negi";
// const c = a+" "+b;
// console.log(c);

// console.log(24+"Rohit");     // 24 converted into string
// console.log(24+"Rohit"+10);  // 24 & 10 converted into string
// console.log(24+30+"Rohit");  // adding 



//3.7 replace([old substring], [new substring])/replaceAll([old substring], [new substring])
// const str = `Hello Coder Army Coder`;
// console.log(str.replace("ode",'iam'));     //replace only 1st occurance of "ode" in string with "iam"
// console.log(str.replaceAll("ode",'iam'));  //replace all occurance of "ode" in string with "iam"



//3.8 trim(): cleaning up whitespaces, it removes/trims the leading & tralling whitespaces from the string
// const user = "  Rohit  Negi ";
// console.log(user.trim());        //removes the leading & tralling whitespaces from the string
// console.log(user.trimStart());   //removes the leading whitespaces from the string
// console.log(user.trimEnd());     //removes the tralling whitespaces from the string



//3.9 split([seperator]): splitting the string into an array

// const names1 = "Rohit Mohit Suraj Rohan Anjali";
// console.log(names1.split(" "))

// const names2 = "Rohit,Mohit,Suraj,Rohan,Anjali";
// console.log(names2.split(","))