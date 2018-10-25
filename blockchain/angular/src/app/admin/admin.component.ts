import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from './AuthService/auth-service.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private authservice:AuthServiceService) { }

  ngOnInit() {
  }

}
