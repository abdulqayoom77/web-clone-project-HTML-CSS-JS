alert("Enter Number")
let num=prompt("Enter number")
if (num%2==0){
  console.log("Your number is divisible by 2")
}
if (num%3==0){
  console.log("Your number is divisible by 3")
}
if(num%2!=0 && num%3!=0) {
  console.log("Your number is not divisible by 2 or 3")
}

else if(num%2!=0){
  console.log("Your number is not divisible by 2")
}
else if(num%3!=0){
  console.log("Your number is not divisible by 3")
}

