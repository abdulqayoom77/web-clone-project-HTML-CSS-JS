
// var cleanestCities = ["Cheyenne", "Santa Fe", "Tucson", "Great Falls", "Honolulu","karachi"];
// cleanestCities = prompt("Enter your city");
// for (var i = 0; i <= 5; i++) {
//     if (cityToCheck === cleanestCities[i]) {
//     alert("It's one of the cleanest cities");
//     }
// }
// if (matchFound === false) {
//     alert("It's not on the list of cleanest cities");
// }

// Prime Numbers in For loop

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

function onePlusAvg(num1, num2) {
    var sum = 1 + (num1 + num2) / 2;
    console.log(sum);
}
onePlusAvg(2, 9);
