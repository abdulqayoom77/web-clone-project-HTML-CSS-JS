// Nested For Loops and Arrays 

var bigNums = [234, 2142, 325, 2314];
var smallNums = [32, 43, 23];
var sumNum = [];
for (var i = 0; i < bigNums.length; i++) {
    for (var j = 0; j < smallNums.length; j++) {
        sumNum.push(bigNums[i] + smallNums[j])
    }
}
console.log(sumNum);

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

