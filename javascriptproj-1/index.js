window.onload  = function()  {
    var auth = localStorage.getItem("auth");
    var nameRef = document.getElementById('name');
    var button = document.getElementById('login-out');
    if(auth) {
    nameRef.innerHTML = auth;
    button.innerHTML = 'logout';
    } else {
    button.innerHTML = 'login';
    }
    
    button.onclick = function() {
    var auth = localStorage.getItem("auth");
    if(auth) {
    localStorage.removeItem('auth')
    button.innerHTML = "login";
    } else {
    
    location.href="match.html"
    }
    }
    }