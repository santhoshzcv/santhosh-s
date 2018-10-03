import { Component } from '@angular/core';
import { ConfigService } from './config.service';

export interface Food {
  network: string;
  address:  string;
  
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private service:ConfigService){
   
  }
  show:boolean=true;
   balance : any = '';
  food:Food={
   network :"option2",
   address: ""
   };
 sendData(form){
   //console.log(form);
    
   this.service.postdata(form).subscribe((res)=>{
     debugger;
     console.log(res);
     this.balance=res;
     this.show=false;
   });
 }
}  