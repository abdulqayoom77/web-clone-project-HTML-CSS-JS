for (var i=0; i<=10; i++){
    var a = document.getElementsByTagName('div')[0]
    var addin = document.createElement('div');
    addin.innerHTML = ("<h1>Hello World </h1>"+ (i));
    a.appendChild(addin);
}