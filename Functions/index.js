// function tellTime() {
//     var now = new Date();
//     var theHr = now.getHours();
//     var theMin = now.getMinutes();
//     console.log("Current time: " + theHr + ":" + theMin);
// }

// var now = new Date();
// var theHr = now.getHours();
// var theMin = now.getMinutes();
// console.log("Current time: " + theHr + ":" + theMin);

// function onePlusAvg(num1, num2) {
//     var sum = 1 + (num1 + num2) / 2;
//     console.log(sum);
// }
// onePlusAvg(2, 9);

// function greetUser(greeting) {
//     document.write(greeting);
// }
// greetUser("Hi! I am Abdul.");

// function reverse_a_number(n)
// {
// 	n = n + "";
// 	return n.split("").reverse().join("");
// }
// console.log(Number(reverse_a_number(32243)));
var n = prompt("Enter your Name to be reversed")
function reverse_a_string(n) {
    n = n;
    return n.split("").reverse().join("");
}
alert(String(reverse_a_string(n)));
document.write(String(reverse_a_string(n)));