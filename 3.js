window.onload=function(){
    var button=document.getElementById("btn");
    var nam=document.getElementById("num");
    console.log(nam);
    isvalid=function(){
        var namref=document.getElementById("js-err-msg");

        var match=nam.value.match(/[0-9]+/);
        if(!match)
        {
            namref.innerHTML="enter the digits";
        }
        else{
            namref.innerHTML="";
        }
    }
    nam.onkeypress=function(e){
        isvalid();
    }
 button.onclick=function(){
     var rem,rev=0;
     if(!nam.value)
     {
         alert("enter the number");
     }
     
     while(nam.value>0){
          rem=nam.value%10;
          nam.value=parseInt(nam.value/10);
          rev=rev*10+rem;
     }
        
     alert(rev);
 }
}

