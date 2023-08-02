var animals=["horse", "ox", "cow", "pig", "duck"];
var i = 0;
while (i < animals.length) {
  if (animals[i] === "pg") {
    console.log("Found it!");
    break;
  }
  else {
    console.log("Not Found!")
    break;
  }
  i++;
}

