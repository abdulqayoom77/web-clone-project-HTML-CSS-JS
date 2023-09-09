// Nested For Loops and Arrays 

// var bigNums = [234, 2142, 325, 2314];
// var smallNums = [32, 43, 23];
// var sumNum = [];
// for (var i = 0; i < bigNums.length; i++) {
//     for (var j = 0; j < smallNums.length; j++) {
//         sumNum.push(bigNums[i] + smallNums[j])
//     }
// }
// console.log(sumNum);

// Nested For Loops Only

// var bigNums = prompt("Enter first Number");
// var smallNums = prompt("Enter first Number");
// var num1 = parseInt(bigNums);
// var num2 = parseInt(smallNums);
// var sumNum = [];
// for (var i = 0; i < bigNums.length; i++) {
//     for (var j = 0; j < smallNums.length; j++) {
//         sumNum.push(bigNums[i] + smallNums[j])
//     }
// }
// alert(sumNum);

// var firstNames = ["BlueRay ", "Upchuck ", "Lojack ", "Gizmo ", "Do-Rag "];
// var lastNames = ["Zzz", "Burp", "Dogbone", "Droop"];
// var fullNames = [];
// for (var i = 0; i < firstNames.length; i++) {
//   for (var j = 0; j < lastNames.length; j++) {
//     fullNames.push(firstNames[i] + lastNames[j])
//   }
// }
// console.log(fullNames);

// var n = 100;
// for (var i = 2; i <= n; i++) {
//     var isPrime = true;
//     for (var j = 2; j <= Math.sqrt(i); j++) { // nested loop
//         if (i % j === 0) {
//             isPrime = false;
//             break;
//         }
//     }
//     if (isPrime) {
//         console.log(i);
//     }
// }
// for (var i = 0; i <= 30; i+=10) {
// for (var j = 10; j < 30; j+=10)    {
// }
// console.log(i+i)

// }
// let sum = 1
// let num = prompt('Enter desired number')
// for (let i = 0; i < num; i++){
//     sum *= (num-i)
// }
// document.write('sum of first '+ num +' natural numbers is ' + sum)

// var inputNumber = prompt('Please enter an integer');
// var total = 1;

// for (i = 0; i < inputNumber; i++){
//     total = total * (inputNumber - i);
// }

// document.write(inputNumber + '! = ' + total);
// var guessNum = prompt('Guess the number');
// var actualNum = 7;
// if (guessNum == actualNum) {
//     document.write('You Guessed the right number <br>')
// }
// else if (guessNum < 7) {
//     document.write('Your number is greater than ' + guessNum + '<br>')
// }
// else if (guessNum > 7) {
//     document.write('Your number is greater than ' + guessNum + '<br>')
// }

// function tryAgain() {
//     var guessNum = prompt('Guess the number');
//     var actualNum = 7;
// }

let random = Math.floor(Math.random() * 101);
console.log(random)
let chances = 0;
let input;
while (input != random){
  input = Number.parseInt(prompt("Enter a Number between 0 to 100"));
  
  if(input != random){
  console.log("Wrong! Try again.")}
  
  if (random>input){
    console.log("The Number is bigger than " + input)
  }
  else if (random<input) {
    console.log("The Number is smaller than " + input)
  }
  
  chances += 1;
}
console.log("Congrats Champ!")
console.log(`You scored ${100-chances} points.`)

