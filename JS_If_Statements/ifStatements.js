var weight = prompt("Enter weight");
var time = prompt("Enter time");
var age = prompt("Enter age");
var gender = prompt("Enter gender");
if (weight > 300 && time < 6 && age > 18 && gender === "male") {
    alert("Come to our tryout!");
}
else {
    alert("Come to our cookout!");
}