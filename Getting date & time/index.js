// Current Date and Time
var date = new Date();
console.log(date);

// Extracting the day of the week

var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var now = new Date();
var theDay = now.getDay();
var nameOfToday = dayNames[theDay];
console.log(nameOfToday);

// Getting Month

var monthNames = ["January", "February", "March", "April", "May", "June", "July" , "August", "September", "October", "November", "December"];
var now = new Date();
var theMonth = now.getMonth();
var nameOfMonth = monthNames[theMonth];
console.log(nameOfMonth);

//Getting Date

var now = new Date();
var date = now.getDate();
console.log(date);

//Getting Year

var now = new Date();
var year = now.getFullYear();
console.log(year);

//Getting Time gives you the number of milliseconds that have elapsed since midnight, Jan. 1,1970.

var now = new Date();
var time = now.getTime();
console.log(time);

//Getting Hours

var now = new Date();
var hours = now.getHours();
console.log(hours);

//Getting Minutes

var now = new Date();
var minutes = now.getMinutes();
console.log(minutes);

//Getting Seconds

var now = new Date();
var seconds = now.getSeconds();
console.log(seconds);

//Getting Milliseconds

var now = new Date();
var milliSeconds = now.getMilliseconds();
console.log(milliSeconds);
