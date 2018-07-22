window.onload= function() {
   var button = document.getElementById("btn");
   var name=document.getElementById("name");
   var password=document.getElementById("password");
   var isvalid=function(){
   console.log('clicked',name.value,password.value);
   var errnameRef=document.getElementById("js-name-err-msg")
   var errpasswordRef=document.getElementById("js-pass-err-msg");

      var match=name.value.match(/^[a-zA-Z0-9_]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/);
      if(!match){
        errnameRef.innerHTML="enter valid email id";
        return false;
      }else if(!password.value){
        errnameRef.innerHTML="";
        errpasswordRef.innerHTML="enter valid Password";
        return false;
      }else
         errnameRef.innerHTML=errpasswordRef.innerHTML="";
         return true;
    }
    name.onkeypress=function(e){
        isvalid();
    }
    password.onkeypress=function(e){
        isvalid();
    }
    button.onclick=function(){
        if(isvalid()){
            alert("login sucessfull");
        }
    
    }
}
