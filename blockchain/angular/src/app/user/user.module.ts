import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user.component';


import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';


@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule,
    MatButtonModule,
    MatCardModule
  ],
  declarations: [LoginComponent, RegisterComponent, HomeComponent,UserComponent]
})
export class UserModule { }
