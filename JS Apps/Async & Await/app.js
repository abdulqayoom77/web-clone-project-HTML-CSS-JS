// async await

async function weatherr() {
    let karachiWeather = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("40 Deg")
        }, 1000)
    })
    let lahoreWeather = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("30 Deg")
        }, 3000)
    })
    console.log("We are fetching Karachi Weather")
    let kWea = await karachiWeather
    console.log("Karachi Weather " + kWea)
    console.log("We are fetching Lahore Weather")
    let lWea = await lahoreWeather
    console.log("Lahore Weather " + lWea)
    return [kWea, lWea]
}


let loadScript = async (src)=>{
    return new Promise((resolve, reject)=>{
    let scri = document.createElement("script")
    scri.type = "text/javascript"
    scri.src = src;
    document.body.appendChild(scri);
    scri.onload = () =>{
        resolve('Script Has Been Loaded Sir!')
    }
    scri.onerror = () =>{
        reject(0)
    }
    console.log('Script loaded')
})
}

const abdul = async () => {
    console.log("Welcome to Control Room")
    var a = await weatherr()
    let p1 = await loadScript("https://www.youtube.com/")

}

abdul()