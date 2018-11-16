import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthServiceService } from '../AuthService/auth-service.service';
import { Transaction } from '../models/transaction.model';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit {


  Transactions:FormGroup
  transaction:Transaction=new Transaction()

  constructor(private fb:FormBuilder,private service:AuthServiceService) { 
   
      this.Transactions=this.fb.group({
         'from'  :  [ this.transaction.from,[Validators.required]],
         'to'  :  [ this.transaction.to,[Validators.required]],
         'password1' :  [ this.transaction.password1,[Validators.required]],
         'ether'     :  [ this.transaction.ether,[Validators.required]]
      })
  }

  ngOnInit() {
  }
  onTransactionSubmit(){
    console.log(this.Transactions.value);
    this.service.sendTransaction(this.Transactions.value).subscribe((res)=>
      console.log(res));
     this.service.listTransaction().subscribe((res)=>{
       console.log(res[0].from);
     })
    //this.router.navigate(['/admin/transaction']);
   }

}
