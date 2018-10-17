import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthServiceService } from './auth-service.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authservice:AuthServiceService,private router:Router){}
  canActivate():boolean{
    if(this.authservice.loggedIn()){
      return true
    }else{
      this.router.navigate(['user/login'])
      return false
    }
  }
}
