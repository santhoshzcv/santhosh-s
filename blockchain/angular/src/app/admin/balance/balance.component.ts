import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../AuthService/auth-service.service';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.css']
})
export class BalanceComponent implements OnInit {
name:String;
name1:{};
amount:any;
message:any;

  constructor(private service:AuthServiceService) { }

  ngOnInit() {
  }

  balance(){
    console.log(this.name);
     this.name1={name:this.name}
    this.service.checkBalance(this.name1).subscribe((res)=>{
      if(res['message']){
        swal("message:"+res['message'])
      }else{
        console.log(res);
        this.amount=res['balance'];
        this.message=res['message1']
      //swal("your balance is "+res)
      }
    })
    }
}
