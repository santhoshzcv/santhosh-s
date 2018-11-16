import { Component, OnInit } from '@angular/core';
import { Account } from '../models/account.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthServiceService } from '../AuthService/auth-service.service';
import { Transaction } from '../models/transaction.model';
import { Router } from '@angular/router';

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
  address:any;
  amount:any;
  name1:{}
  


  constructor(private fb:FormBuilder,private service:AuthServiceService,private router: Router ){
    this.CreateAccount = this.fb.group({
      'name'    :    [this.account.name,[Validators.required]],
      'password' :    [this.account.password,[Validators.required]]
    })
    this.Transactions=this.fb.group({
      "faddress":[this.transaction.from],
      "taddress":[this.transaction.from],
      "password1":[this.transaction.from],
      "ether":[this.transaction.from]
    })
   }
 

  ngOnInit() {
  }
  onLoginSubmit(){
    this.spin=true;
    console.log(this.CreateAccount.value);
    this.service.createAcc(this.CreateAccount.value).subscribe((res)=>{
      console.log(res);
     this.address=res['address'];
      //swal("your account is successfully created with address"  +res['address'])
      this.spin=false;
    })
  }
  balance(){
  console.log(this.name);
   this.name1={name:this.name}
  this.service.checkBalance(this.name1).subscribe((res)=>{
    if(res['message']){
      swal("message:"+res['message'])
    }else{
      this.amount=res;
    //swal("your balance is "+res)
    }
  })
  }
   onTransactionSubmit(){
   console.log(this.Transactions.value);
   this.service.sendTransaction(this.Transactions.value).subscribe((res)=>
     console.log(res));
    this.service.listTransaction().subscribe((res)=>{
      console.log(res[0].faddress);
    })
   //this.router.navigate(['/admin/transaction']);
  }
}
