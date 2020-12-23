// EXAMPLE 1
function check(){
    let username = document.getElementById("uname");
    let password = document.getElementById("pass");
    if(username.value=="abc" && password.value=="123")
        alert("Hello!! You are successfully signed in");
    else
        alert("Invalid Username and Password!");
}

//EXAMPLE 2

function welcome(){
    let fname = document.getElementById('fname');
    let buttxt = document.getElementById('buttxt');
    buttxt.innerHTML = fname.value;
}

//EXAMPLE 3
function openwindow(){
    window.open("welcome.html")
}


