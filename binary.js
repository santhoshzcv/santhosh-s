window.onload=function(){
    var input1=document.getElementById("input1");
    var output=document.getElementById("output");
    var and=document.getElementById("and");
    var or =document.getElementById("or");
    var not=document.getElementById("not");
    var input2=document.getElementById("input2");
    
    var result;
    and.onclick=function(){
       result= (input1.value & input2.value);
        output.innerHTML=result;
    }
    or.onclick=function(){
        output.innerHTML=input1.value|input2.value;
    }
    not.onclick=function(){
        output.innerHTML=(~input1.value);
    }

}