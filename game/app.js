let userguess = prompt('choose between snake , water and gun')
let value = ['snake' , 'water' , 'gun']
// console.log(value)
let comp_guess = value[Math.floor(Math.random() * value.length) ]
document.write(comp_guess)

if(userguess == 'snake' && comp_guess == 'gun'){
    document.write('<br>You Lose')
}
else if(userguess == 'snake' && comp_guess == 'water'){
    document.write('<br>You Won')
}
else if(userguess == 'snake' && comp_guess == 'snake'){
    document.write('<br>The match has drawn')
}
else if(userguess == 'gun' && comp_guess == 'snake'){
    document.write('<br>You Won')
}
else if(userguess == 'gun' && comp_guess == 'water'){
    document.write('<br>You lose')
}
else if(userguess == 'gun' && comp_guess == 'gun'){
    document.write('<br>The match has drawn')
}
else if(userguess == 'water' && comp_guess == 'water'){
    document.write('<br>The match has drawn')
}
else if(userguess == 'water' && comp_guess == 'gun'){
    document.write('<br>You Won')
}
else if(userguess == 'water' && comp_guess == 'snake'){
    document.write('<br>You Won')
}
else{
    document.write('<br>PLEASE ENTER THE VALID OPTION')
    var color = pink;
    document.body.style.background = color;

}