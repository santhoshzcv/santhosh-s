																																																																																																					 window.onload= function() {
   var button = document.getElementById("btn");
   var name=document.getElementById("name");
   var password=document.getElementById("password");
button.onclick = function() {
       console.log('clicked',name.value,password.value);
   if(name.value&&password.value)
     alert("login successful");
   else
     alert("failed");	
}
}
