import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';

import { UserRoutingModule } from './user-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user.component';

import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import {MatNativeDateModule,MatIconModule} from '@angular/material';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {CdkTableModule} from '@angular/cdk/table';
import { TokenInterceptorService } from './AuthService/token-interceptor.service';
import { AuthGuard } from './AuthService/auth.guard';
import { AuthServiceService } from './AuthService/auth-service.service';
import { MatPaginatorModule } from '@angular/material';
import {MatSortModule} from '@angular/material/sort';



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
    HttpClientModule,
    CdkTableModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  declarations: [LoginComponent, RegisterComponent, HomeComponent,UserComponent],
  providers:[ AuthGuard,AuthServiceService,{
    provide : HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi:true
  }]
})
export class UserModule { }
