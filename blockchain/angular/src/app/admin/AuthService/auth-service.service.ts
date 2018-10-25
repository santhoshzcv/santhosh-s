import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private http: HttpClient,private router:Router) { }

//private   _registerurl = "http://localhost:3000/api/adminregister";
private  _loginurl = "http://localhost:3001/api/adminlogin" ;
private _accounturl = "http://localhost:3001/api/accounts";
private _balanceurl = "http://localhost:3001/api/balance"
loginUser(user){
  return this.http.post(this._loginurl,user);
}

loggedIn(){
  return !!localStorage.getItem('token');
}
logoutUser(){
  localStorage.removeItem('token');
  this.router.navigate(['user/login']);
}
createAcc(account){
  debugger;
  return this.http.post(this._accounturl,account)
}
checkBalance(balance){
  return this.http.post(this._balanceurl,balance)
}

}
 