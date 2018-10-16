import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private http: HttpClient) { }

  private   _registerurl = "http://localhost:3000/api/register";
  private  _loginurl = "http://localhost:3000/api/login" ;

  registerUser(user){
   
    return this.http.post(this._registerurl,user);
  }
  loginUser(user){
    
    return this.http.post(this._loginurl,user);
  }
}
