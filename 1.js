
window.onload=function()
{
    var button=document.getElementById("btn");
    var name=document.getElementById("str");
button.onclick=function()
{
  var n=name.value.length;
    var i,j,e=0;
if(!name.value){
 alert("enter string");
}
else
{
console.log(name.value);
console.log(n);
                           for(i=0;i<n;i++)
                        {         e=0;
                             for(j=i+1;j<n;j++)
                               {
                                  if(name.value[i]==name.value[j])
                                        {
                                          e++;
                                          
                                  
                                       }

                               }  
                                    if(e==0)
                                      {
                                         document.write(name.value[i]); 
                                        return;
                                      }

                         }

      }
}
}


