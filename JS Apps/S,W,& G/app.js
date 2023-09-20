// function pinkk() {
//   var a = document.body;
//   a.parentElement.style.background = "pink";
// }

// function redd() {
//   var a = document.body;
//   a.parentElement.style.background = "red";

// var navv = document.getElementById('nav')
// navv.firstElementChild.style.color = 'red';
// document.getElementsByTagName("ul")[0].firstElementChild.style.color = "white";
// document.getElementsByTagName("ul")[0].firstElementChild.style.color = "green";
// document.getElementsByTagName("ul")[0].lastElementChild.style.color = "green";
// 


// Array.from(document.getElementsByTagName("ul")).forEach((element) =>{
//     element.style.background = "red";
// })

var user = prompt('Enter S(snake), water(W), gun(G)');
user = user.toUpperCase();
var compM = Math.floor(Math.random() * 3 );
// console.log(compM)
var comp = ["S", "W", "G"][compM]

function playS(user, comp){
    if(user == comp){
        return'NoBody';
    }
    else if (comp == "S" && user == "W"){
        return'CPU';
    }
    else if (comp == "S" && user == "G"){
        return'Human'
    }
    else if (comp == "W" && user == "S"){
        return'Human'
    }
    else if (comp == "W" && user == "G"){
        return'CPU';
    }
    else if (comp == "G" && user == "S"){
        return'CPU';
    }
    else if (comp == "G" && user == "W"){
        return'Human'
    }
    else{
        return"Please Enter Your Answer"
    }
}

var result = playS(user,comp)
document.write(`CPU : ${comp} <br> USER : ${user} <br>The Winner is : ${result}`)