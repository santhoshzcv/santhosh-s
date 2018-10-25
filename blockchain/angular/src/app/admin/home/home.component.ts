import { Component, OnInit } from '@angular/core';
import { Account } from '../models/account.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthServiceService } from '../AuthService/auth-service.service';
import { Transaction } from '../models/transaction.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  CreateAccount:FormGroup
  Transactions:FormGroup
  transaction:Transaction=new Transaction()
  account:Account = new Account()
  spin=false;
  name:String;
  name1:{}
  


  constructor(private fb:FormBuilder,private service:AuthServiceService) {
    this.CreateAccount = this.fb.group({
      'name'    :    [this.account.name,[Validators.required]],
      'password' :    [this.account.password,[Validators.required]]
    })
    this.Transactions=this.fb.group({
      "faddress":[this.transaction.faddress],
      "taddress":[this.transaction.faddress],
      "password1":[this.transaction.faddress],
      "ether":[this.transaction.faddress]
    })
   }
 

  ngOnInit() {
  }
  onLoginSubmit(){
    this.spin=true;
    console.log(this.CreateAccount.value);
    debugger;
    this.service.createAcc(this.CreateAccount.value).subscribe((res)=>{
      console.log(res);
      swal("your account is successfully created with address"  +res['address'])
      this.spin=false;
    })
  }
  balance(){
  console.log(this.name);
   this.name1={name:this.name}
  this.service.checkBalance(this.name1).subscribe((res)=>{
    if(res['message']){
      swal(""+res['message'])
    }else
    swal("your balance is "+res)
  })
  }
  onTransactionSubmit(){
    console.log(this.Transactions.value);
  }
}
