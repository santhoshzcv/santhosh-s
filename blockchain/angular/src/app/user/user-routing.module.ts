import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './AuthService/auth.guard';

const routes: Routes = [
  {
    path:'user',
    component: UserComponent,
    children:[
      { path:'',component:LoginComponent},
      { path:'login',component:LoginComponent},
      { path:'register',component:RegisterComponent},
      { path:'home',component:HomeComponent,canActivate: [AuthGuard]}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
