//ways to define date in js
let date = new Date("2025-11-27");
console.log(`Date but strings: ${date}`);
//year,month,date,hours,minutes,seconds,ms
//year can be literal 4 digit year or 2 digit year is considered
//to be 19xx ex 89 is 1989
//month starts from 0 till 11
//date is actual day of month
//rest of it is as usual, like hours,minutes,seconds,ms so and so
let date_1 = new Date(2011,0,1,12,30,0,0);
//1-1-2011 12:30 PM
console.log(`Date but using params: ${date}`);
console.log(date_1.getFullYear());
console.log(date_1.getMonth());
console.log(date_1.getDate());
console.log(date_1.getHours(),date_1.getMinutes(),date_1.getSeconds(),date_1.getMilliseconds());
console.log(date_1.getDay()); //0(Sunday) to 6(Saturday)
//to get UTC based counterparts just add UTC right after get
console.log(date_1.getUTCFullYear());

console.log(new Date().getTimezoneOffset());

//To change the date variable, you can use set method
//It has all the same methods as set but replaced by get
let now = new Date();
console.log(now);
now.setDate(2);
console.log(now);

//Date object is very autocorrective

let date_2 = new Date(2016,1,32);
console.log(date_2);
let date_3 = date_2 + 2;
console.log(date_3);
let date_4 = new Date(date_2);
date_4.setDate(date_4.getDate()+2);
console.log(date_4);

//milliseconds counted from Jan 1 1970 till now
let start = Date.now();
console.log(start);


//Date.getTime() is faster for operations since there is less type 
//conversions involved

//The date object is able to parse the date and time in this format
//YYYY-MM-DDTHH:mm:ss.sssZ

let ms = Date.parse('2012-01-26T13:51:50.417-07:00');
console.log(ms);
