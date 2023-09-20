function loadSc(src, callback){
    var scrit = document.createElement("script");
    scrit.src = src ;
    scrit.onerror = function(){
        console.log("Error Loading script with SRC: <br>" + src);
        callback(new Error("Src got some error"))
    }
    scrit.onload = function(){
        console.log("Loaded script with SRC: <br>" + src);
        callback(null, src);
    }
    document.body.appendChild(scrit);
    
}
function hello(error, src){
   if(error){
    console.log(error);
    return
   }
   alert('Hello'+ src)
}
function gmor(){
    console.log("Good Morning")
}
loadSc("https://www.youtube.com/watch?v=IJlGpI6l92U&t=1031s&ab_channel=CodeWithHarry", hello)


let promise = new Promise(function(resolve, reject){
    console.log("Pending")
    setTimeout(function(){
        console.log("Resolved")
        resolve(true)
    },2000)
})
let promise2 = new Promise(function(resolve, reject){
    console.log("Pending")
    setTimeout(function(){
        console.log("Rejected")
        reject(new Error("I am an Error"))
    },2000)
})

console.log(promise,promise2)
promise.then((value)=>{
    console.log(value);
})
promise2.catch((error)=>{
    console.log("Some Error Occurred")

})



