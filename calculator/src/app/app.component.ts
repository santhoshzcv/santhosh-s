import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  res = '';
  s :any;
  iteams = [0,1,2,3,4,5,6,7,8,9,'+','-','*','/','=','c'];
  getAbc(value:any){
    if((value != 'c') && (value != '='))
    {
      if(this.s)
      {
        this.res = '';
        this.s = false;
        this.res=value;
      }
      else{
        this.res = this.res + value;
      }
    }
    if((value == 'c')){
      this.res='';
    }
    if((value == '=')){
      this.res = eval(this.res) 
      this.s= true;
    }
  }
}
