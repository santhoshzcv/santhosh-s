import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private http: HttpClient,private router:Router) { }

  private   _registerurl = "http://localhost:3002/api/register";
  private  _loginurl = "http://localhost:3002/api/login" ;
 

  registerUser(user){
       
    return this.http.post(this._registerurl,user);
  }
  loginUser(user){
    return this.http.post(this._loginurl,user);
  }
 
  loggedIn(){
    return !!localStorage.getItem('token');
  }
  getToken(){
    return localStorage.getItem('token');
  }
  logoutUser(){
    localStorage.removeItem('token');
    this.router.navigate(['user/login']);
  }
}
