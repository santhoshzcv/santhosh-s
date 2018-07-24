window.onload = function() {
    var emailRef=document.getElementById("email");
    var nameRef=document.getElementById("name");
    var msgRef=document.getElementById("msg");
    var button=document.getElementById("submit");
    var list=document.getElementById("list");
    var inBoxObj=localStorage.getItem("inbox");// to get the elements from local storage
    if(inBoxObj){
        inBoxObj=JSON.parse(inBoxObj);
    }else{
        inBoxObj=[]; 
    }
    var addItemsToTable=function(obj){
    var text = "<tr>\
    <td>" + obj.msg + "</td>\
    <td>" + obj.time + "</td>\
    <td>" + obj.user.name + "</td>\
    <td>" + obj.user.emailId + "</td>\
    </tr>"
    list.innerHTML += text;
    console.log(inBoxObj);
    }
    for(var i=0;i<inBoxObj.length;i++) {
        addItemsToTable(inBoxObj[i]);
     }
    var isvalid=function(){
        //console.log('clicked',name.value,password.value);
        var erremailRef1=document.getElementById("js-email-err-msg");
        var errnameRef1=document.getElementById("js-name-err-msg");
        var errmsgRef1=document.getElementById("js-msg-err-msg");
     
           var match=emailRef.value.match(/^[a-zA-Z0-9_]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/);
           if(!match){
             erremailRef1.innerHTML="enter valid email id";
             return false;
           }else if(!nameRef.value){
             erremailRef1.innerHTML="";
             errnameRef1.innerHTML="enter valid name";
             return false;
           }else if(!msgRef.value){
              erremailRef1.innerHTML=errnameRef1.innerHTML="";
              errmsgRef1.innerHTML="enter the msg";
              return false;
           }else{erremailRef1.innerHTML=errnameRef1.innerHTML=errmsgRef1.innerHTML="";
                 return true;
           }
        }
    
      emailRef.onkeypress=function(e){
        isvalid();
    }
    nameRef.onkeypress=function(e){
        isvalid();
    }
    msgRef.onkeypress=function(e){
        isvalid();
    }

button.onclick = function() {
    if(isvalid()){
        alert("send the data");
    }
    var tempObj = {
    msg: msgRef.value,
    time: new Date().getMonth(),
    user: {
    name: nameRef.value,
    id: 45,
    emailId: emailRef.value
    }
    };
    inBoxObj.push(tempObj); // to add objects or element to array inBoxObj
    localStorage.setItem("inbox", JSON.stringify(inBoxObj));// to convert the obj to string and store in the local storage
    addItemsToTable(tempObj);
    }
    
    
    }
   
    
