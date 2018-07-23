window.onload=function(){
    var button=document.getElementById("btn");
    button.onclick=function(){
      var day= ["sunday","monday","tuesday","wednesday","thursday","friday","saturday"];
      var date= new Date(document.getElementById("nam").value);
      var a= date.getDay();
      console.log(a);
      console.log(day[a]);
      document.write(day[a]);

    }
}
