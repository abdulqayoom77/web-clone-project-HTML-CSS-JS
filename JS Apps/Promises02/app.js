                                                             // LoadScript Function

// let loadScript = (src)=>{
//     return new Promise((resolve, reject)=>{
//     let scri = document.createElement("script")
//     scri.type = "text/javascript"
//     scri.src = src;
//     document.body.appendChild(scri);
//     scri.onload = () =>{
//         resolve('Script Has Been Loaded Sir!')
//     }
//     scri.onerror = () =>{
//         reject(0)
//     }
// })
// }


// let p1 = loadScript("https://www.youtube.com/")
// p1.then((value)=>{
//     console.log(value);
//     return loadScript("https://www.facebook.com/")
// }).then((value)=>{
//     console.log("Second Script has loaded")
// }).catch((error)=>{
//     console.log(error,"We are sorry for an error!")
// })


                                                             // Promise dot All

// let p1 = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         resolve("Value 01")
//     },1000)
// })
// let p2 = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         resolve("Value 01")
//     },1000)
// })
// let p3 = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         resolve("Value 01")
//     },1000)
// })
// let promiseAll = Promise.all([p1, p2, p3])
// promiseAll.then((value)=>{
//     console.log(value)
// })

                                                             // Promise All Settled

// let p1 = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         resolve("Value 01")
//     },1000)
// })
// let p2 = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         reject(new Error("error"))
//     },1000)
// })
// let p3 = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         resolve("Value 01")
//     },1000)
// })
// let promiseAllsettled = Promise.allSettled([p1, p2, p3])
// promiseAllsettled.then((value)=>{
//     console.log(value)
// })

                                                             // Promise dot Race
 
let p1 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("Value 01")
    },1000)
})
let p2 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        reject(new Error("error"))
    },1000)
})
let p3 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("Value 03")
    },1000)
})
// let promiserace = Promise.race([p1, p2, p3])
// promiserace.then((value)=>{
//     console.log(value)
// })

                                                             // PROMISE ANY

// let promiseany = Promise.any([p1, p2, p3])
// promiseany.then((value)=>{
//     console.log(value)
// })

                                                             // PROMISE RESOLVE
// let promiseResolve = Promise.resolve("hehe")
// promiseResolve.then((value)=>{
//     console.log(value)
// })

                                                             // PROMISE REJECT
let promisereject = Promise.reject(new Error("oein"))
promisereject.then((value)=>{
    console.log(value)
})