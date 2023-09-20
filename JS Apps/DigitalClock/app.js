// setInterval(function () {
//     var a = new Date()
//     var secs = a.getSeconds();
//     // document.write(secs)
//     var mins = a.getMinutes();
//     // document.write(mins)
//     var hours = a.getHours();
//     var bd = document.getElementById('clock');
//     bd.innerHTMl =  hours,mins,secs;
// }, 1000)



func_t = () => {
    let c = new Date()
    let d = c.getSeconds()
    let f = c.getMinutes()
    let g = c.getHours()
    let det = c.getDate()
    let yr = c.getFullYear()
    let mon = c.getMonth()
    let send = det + "/" + mon + "/" + yr;
    let eject = document.getElementsByClassName("time")
    eject[2].innerHTML = d
    eject[1].innerHTML = f
    eject[0].innerHTML = g
    eject[3].innerHTML = send
}
setInterval(func_t, 1000)