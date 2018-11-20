import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { TransactionComponent } from './transaction/transaction.component';
import { AccountComponent } from './account/account.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { BalanceComponent } from './balance/balance.component';
import { AuthGuard } from '../user/AuthService/auth.guard';


const routes: Routes = [
  {
    path:'admin',
    component: AdminComponent,
    children:[
      { path:'',component:AccountComponent},
      { path:'transaction',component:TransactionComponent,canActivate: [AuthGuard]},
      { path:'account',component:AccountComponent,canActivate: [AuthGuard]},
      { path:'abc',component:TransactionsComponent,canActivate: [AuthGuard]},
      { path:'balance',component:BalanceComponent,canActivate: [AuthGuard]}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
