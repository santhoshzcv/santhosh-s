import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { HomeComponent } from './home/home.component';
import { TransactionComponent } from './transaction/transaction.component';
import { AccountComponent } from './account/account.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { BalanceComponent } from './balance/balance.component';


const routes: Routes = [
  {
    path:'admin',
    component: AdminComponent,
    children:[
      { path:'',component:AccountComponent},
      { path:'home',component:HomeComponent},
      { path:'transaction',component:TransactionComponent},
      { path:'account',component:AccountComponent},
      { path:'abc',component:TransactionsComponent},
      { path:'balance',component:BalanceComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
