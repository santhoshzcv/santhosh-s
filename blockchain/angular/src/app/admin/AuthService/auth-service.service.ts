import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private http: HttpClient,private router:Router) { }

//private   _registerurl = "http://localhost:3000/api/adminregister";
private  _loginurl = "http://localhost:3002/api/adminlogin" ;
private _accounturl = "http://localhost:3002/api/accounts";
private _balanceurl = "http://localhost:3002/api/balance";
private _transactionurl =  "http://localhost:3002/api/transaction1";
private _listTransactionUrl = "http://localhost:3002/api/list";
private _listTransactionUrl1 = "http://localhost:3002/api/list1";
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
  return this.http.post(this._accounturl,account)
}
checkBalance(balance){
  return this.http.post(this._balanceurl,balance)
}
sendTransaction(transaction){
  return this.http.post(this._transactionurl,transaction)
}
listTransaction(){
  return this.http.get(this._listTransactionUrl);
}
listAddress(transactionHash){
  return this.http.post(this._listTransactionUrl1,transactionHash)
}
}
 