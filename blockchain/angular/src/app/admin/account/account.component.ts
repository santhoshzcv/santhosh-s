import { Component, OnInit } from '@angular/core';
import { Account } from '../models/account.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthServiceService } from '../AuthService/auth-service.service';



@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})


export class AccountComponent implements OnInit {

  account:Account = new Account()
  CreateAccount:FormGroup
  address:any;

  constructor(private fb:FormBuilder,private service:AuthServiceService) {
    this.CreateAccount = this.fb.group({
      'name'     :    [this.account.name,[Validators.required]],
      'password' :    [this.account.password,[Validators.required]]
    })
   }

  ngOnInit() {
  }

  onLoginSubmit(){
    //this.spin=true;
    console.log(this.CreateAccount.value);
    this.service.createAcc(this.CreateAccount.value).subscribe((res)=>{
      console.log(res);
     this.address=res['address'];
      //swal("your account is successfully created with address"  +res['address'])
      //this.spin=false;
    })
  }

}
