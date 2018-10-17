import { Component, OnInit } from '@angular/core';
import { Login } from '../models/login.model';
import { FormBuilder, Validators, FormGroup, FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material';
import { AuthServiceService } from '../AuthService/auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  LoginForm:FormGroup
  data:any;
  login:Login = new Login()

  constructor(private fb:FormBuilder,private authservice:AuthServiceService,private router:Router) {
    this.LoginForm = fb.group({
      'email'    :    [this.login.email,[Validators.required,Validators.email]],
      'password' :    [this.login.password,[Validators.required]]
    })
   }
   
  ngOnInit() {
  }
  onLoginSubmit(){;
    console.log(this.LoginForm.value);
    this.authservice.loginUser(this.LoginForm.value).subscribe(
      (res)=>{
       console.log(res)
       this.data=res['token']
       localStorage.setItem('token',this.data)
       swal("Good job!", "you loged in successfully!", "success");
       this.router.navigate(['user/home']);
      },
      (err)=>{
        console.log(err)
     } )
  }

}
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl| null, form: FormGroupDirective | NgForm | null): boolean {
    return !! (control && control.invalid && (control.dirty || control.touched));  
  }
}
