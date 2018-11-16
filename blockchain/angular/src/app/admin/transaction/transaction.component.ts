
import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import { AuthServiceService } from '../AuthService/auth-service.service';
// import { List } from '../models/list.model';
export interface PeriodicElement {
  from: string;
  to: string;
  ether: string;
  date: string;
  transactionHash:string;
}

let ELEMENT_DATA: PeriodicElement[];
@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {
  //list:List[];
  // p: number = 1;
   
  constructor(private service:AuthServiceService) { 

    this.service.listTransaction().subscribe((res)=>
    {
    //  this.list=res as List[]; 
    //  console.log(this.list);
    
    ELEMENT_DATA = res as PeriodicElement[] ;
    
    console.log(ELEMENT_DATA);
    })
  }

  dataSource = new MatTableDataSource(ELEMENT_DATA);
  
  @ViewChild(MatPaginator) paginator: MatPaginator;
  ngOnInit() {
    this.dataSource.paginator = this.paginator;   
  }
 
  displayedColumns: string[] = ['from', 'to', 'ether', 'date','transactionHash'];
  
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
