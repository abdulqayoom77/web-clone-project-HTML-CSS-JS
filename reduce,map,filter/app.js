// Map

// var a = arr.map((n)=>{
    //     document.write(n + '<br>');
//     return n+1 + '<br>';
// })
// document.write(a + '<br>');
// var a = arr.map((n, index, array)=>{
//     document.write(n, index, array + '<br>');
//     return n + index ;
// })
// document.write(a + '<br>');

// Filter

// var a = arr.filter((n)=>{
//     return n>60;
// })
// document.write(a)

// reduce 

var arr = [1, 4, 4, 65, 32];
var a = arr.reduce((n, g, f)=>{
    return n-g+f;
})
document.write(a);