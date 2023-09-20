function val(){
    var a = document.getElementById("inp").value;
    var c = document.getElementById("p2");
    c.innerHTML = "";
    try {
        if(a == "") throw "is empty";
        if(isNaN(a)) throw "is not a Number";
        if(a < 18) throw "is lower than 18";
        if(a > 50) throw "is greater than 50";


    } 
    catch (error) {
        c.innerHTML = "Age " + error;
    }
    finally{

        var a = document.getElementById("inp").value = "";
        // c.innerHTML = "Submitted";

    }
}