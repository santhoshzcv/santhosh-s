window.onload=function(){
  var nam=document.getElementById("nam");
  var button=document.getElementById("btn");
  var msg1=document.getElementById("msg");
  button.onclick=function(){
    msg1.innerHTML +="<div class='msg2'>"+nam.value+"</div>";
    nam.value=" ";
  }
}
