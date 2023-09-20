function clck(num){
    document.getElementById("fld").value += num;
    // document.write(num)
}

function eql(){
    var eq = document.getElementById('fld');
    eq.value = eval(eq.value);
}

function clr(){
    document.getElementById("fld").value = '';
}
function singleClr(){
    var sClr = document.getElementById("fld").value;
    sClr = sClr.slice(0,-1);
    document.getElementById('fld').value = sClr;
}