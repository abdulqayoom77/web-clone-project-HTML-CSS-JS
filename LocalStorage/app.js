function signup(){

    var email = document.getElementById('semail').value
    var pass = document.getElementById('spass').value
    // var obj = {
    //     email : 'Email',
    //     pass : 'Password'
    // }
    // var obj2 = JSON.stringify(obj)
    // obj2 = JSON.parse(obj)
    localStorage.setItem('Email',email)
    localStorage.setItem('Password',pass)
    location.href = './login.html'
}

function signin() {
    var email = document.getElementById('lemail').value
    var pass = document.getElementById('lpass').value
    if (localStorage.getItem('Email') == email && localStorage.getItem('Password') == pass ){
        location.href = './welcome.html';
    }
    else {
        alert('sin up first')
        location.href = './signup.html';
    }
}

function logout(){
    // localStorage.clear();
    location.href = './login.html'
}