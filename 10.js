window.onload=function(){
    var nam=document.getElementById("num");
    var button=document.getElementById("btn");
    var msg1=document.getElementById("msg1"); 
     var msg2=document.getElementById("msg2");
     var msg3=document.getElementById("msg3");
    button.onclick=function(){
      var i,j,e=0;
      console.log(msg1);
      var c=nam.value;
           c--;
     for(i=c;i<nam.value;i--){
            e=0;
       for(j=1;j<=i;j++){
        
             if(i%j==0){
                 e++;
             }
            
        } 
            if(e==2){
              msg1.innerHTML=i+" is a left side prime number";
              break;
            }
      }
    var b=nam.value;
       b++;
 for(i=b;i>nam.value;i++){
        e=0;
   for(j=1;j<=i;j++){
    
         if(i%j==0){
             e++;
         }
        
    } 
        if(e==2){
           msg2.innerHTML=i+" is a right side prime number";
          break; 
         }
     }
       
      var d=nam.value;
        e=0;
    for(j=1;j<=d;j++){
          if(d%j==0){
              e++;
          }
     } 
         if(e==2){
             msg3.innerHTML=d+"   is a prime number";
         }else{
             msg3.innerHTML= d+"   is not a prime number";
         }
    
      
  } 
}
