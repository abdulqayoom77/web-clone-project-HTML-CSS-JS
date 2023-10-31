var min = "00";
var sec = "00";
var mili = "00";
var getMins = document.getElementById("minutes")
var getSecs = document.getElementById("seconds")
var getMilliSecs = document.getElementById("miliSec")
var resetWatch;

function start(){
    resetWatch = setInterval (function(){
        mili++;
        getMilliSecs.innerHTML = mili;
        if (mili >= 100){
            sec++;
            getSecs.innerHTML = sec;
            mili = 0;
        }
        else if (sec >=59){
            min++;
            getMins.innerHTML = min;
            sec = 0;
        }
    },10)
    document.getElementById("dAbled").disabled = true;
}

function stop(){
    clearInterval(resetWatch)
    document.getElementById("dAbled").disabled = false;

}

function reset(){
    min = "00";
    sec = "00";
    mili = "00";
    getMins.innerHTML = min;
    getSecs.innerHTML = sec;
    getMilliSecs.innerHTML = mili;
}

function ab(){
    var i=0;
}