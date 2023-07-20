
var cleanestCities = ["Cheyenne", "Santa Fe", "Tucson", "Great Falls", "Honolulu"];
cleanestCities = prompt("Enter your city");
for (var i = 0; i <= 4; i++) {
    if (cityToCheck === cleanestCities[i]) {
    alert("It's one of the cleanest cities");
    }
}
if (matchFound === false) {
    alert("It's not on the list");
}