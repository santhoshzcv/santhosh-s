import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';

import { UserRoutingModule } from './user-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user.component';

import { HttpClientModule } from '@angular/common/http';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatNativeDateModule,MatIconModule} from '@angular/material';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';


@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule,
    MatButtonModule,
    MatCardModule,
    ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl: 'never'}),
    FormsModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,
    MatRadioModule,
    MatSelectModule,
    HttpClientModule
  ],
  declarations: [LoginComponent, RegisterComponent, HomeComponent,UserComponent]
})
export class UserModule { }
