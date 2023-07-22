// Replacing First Instane Character

var char = "I am Abdul"
var repalcingfirstInstanceChar = char.replace("Abdul", "Abdul Qayoom");
console.log(repalcingfirstInstanceChar);

// Replacing All Characters

var char = "Pakistan is located on the Asian continent. Pakistan also has a coastline along the Arabian Sea and the Gulf of Oman of the Indian Ocean. Pakistan borders four countries: Iran and Afghanistan, China and India. Pakistan has 5 provinces: Punjab, Sindh, Balochistan, Khyber Pakhtunkhwa and Gilgit Baltistan."
var repalcingfirstInstanceChar = char.replace(/Pakistan/g, "Islamic Republic of Pakistan");
console.log(repalcingfirstInstanceChar);

