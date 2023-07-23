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

//Getting Time

