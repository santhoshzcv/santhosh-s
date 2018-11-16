import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from './AuthService/auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private authservice:AuthServiceService,private router:Router) { }

  ngOnInit() {
  }
  list(){
  this.router.navigate(['/admin/transaction']);
  }
  account()
{
  this.router.navigate(['/admin/account']);
}
balance()
{
  this.router.navigate(['/admin/balance']);
}
transaction()
{
  this.router.navigate(['/admin/abc']);
}
logs()
{
  this.router.navigate(['/admin/transaction']);
}

}
