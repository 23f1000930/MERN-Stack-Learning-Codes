// To find/fetch current date from system 


//1. Basics

// const now = new Date();

// console.log(now);
// console.log(now.toString());       //local/current country's time (long format)
// console.log(now.toISOString());
// console.log(now.toLocaleString()); //local/current country's time (short format)

// Local time chal rha uske hisab se values
// console.log(now.getDay());
// console.log(now.getDate());
// console.log(now.getFullYear());
// console.log(now.getMonth());
// console.log(now.getHours());
// console.log(now.getSeconds());

















//2. Creating our custom date

// days: Mon-tue(1 based inexing)
// Month: 0 based indexing
// year month date hour minute second millisecond

// const now = new Date(2025,8,20,8,25,16,125);
// console.log(now);
// console.log(now.toString());


















//3. Timestamp

// const now = Date.now(); // gives current UTC time in milliseconds starting from 1 jan 1970 ....

// const dates = new Date(1759275037293);  // or const dates = new Date(now);
// // const dates = new Date(-1768373); // time before 1 Jan 1970 or go 1768373 milliseconds back from 1 jan 1970 & give that time

// console.log(dates.toString());
// console.log(dates);
// console.log(now);
// console.log(now.toString()); // nothing happens, output same as console.log(now);
// 1759272851288: is a TimeStamp











//4.

// When run below code in browser, then browser by default auto shows/display time according to your country.
// But when running below code in terminal the output comes in UTC time
// const dates = new Date(1759275037293); 
// console.log(dates);