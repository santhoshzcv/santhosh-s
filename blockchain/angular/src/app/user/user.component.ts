import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from './AuthService/auth-service.service';
;

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private authservice:AuthServiceService) { }
 
  ngOnInit() {
  }
 
}
