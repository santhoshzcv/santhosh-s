import { Injectable,Injector } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { AuthServiceService } from './auth-service.service';
@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements  HttpInterceptor {

  constructor(private injector:Injector) { }
 
    intercept(req, next){
      let authservice= this.injector.get(AuthServiceService)
      let tokenizedReq=req.clone({
        setHeaders:{
          Authorization: `Bearer ${authservice.getToken()}`
        }
      })
      return next.handle(tokenizedReq)
    }
}
