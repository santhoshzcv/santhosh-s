
window.onload=function()
{
    var button=document.getElementById("btn");
    var name=document.getElementById("str");
    var result=document.getElementById("result");
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
  {
  if(name.value[i]==name.value[i+1])
     e++;
  }
if(e==(n-1))
 result.innerHTML="there is no repeated character";


                           for(i=0;i<n;i++)
                        {         e=0;
                             for(j=0;j<n;j++)
                               {
                                  if(name.value[i]==name.value[j])
                                        {
                                          e++;
                                       }

                               }  
                                    if(e<2)
                                      {     var x=name.value[i];
                                           console.log(x);
                                         result.innerHTML=x;
                                        return;
                                      }

                         }

}
}
}


