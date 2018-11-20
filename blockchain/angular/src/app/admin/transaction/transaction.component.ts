
import {Component, OnInit, ViewChild,Inject} from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import { AuthServiceService } from '../AuthService/auth-service.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
// import { List } from '../models/list.model';
export interface PeriodicElement {
  from: string;
  to: string;
  ether: string;
  date: string;
  transactionHash:string;
}

export interface DialogData {
  faddress: string;
  taddress: string;
  ether:string;
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
  transactionHash:String;
  public dataSource:any=null;
  constructor(private service:AuthServiceService,public dialog: MatDialog) {}

  @ViewChild(MatPaginator) paginator: MatPaginator;
  ngOnInit() {  
    this.service.listTransaction().subscribe((res)=>
    {
    //  this.list=res as List[]; 
    ELEMENT_DATA = res as PeriodicElement[] ;
    this.dataSource = new MatTableDataSource(ELEMENT_DATA);
    console.log(ELEMENT_DATA);
    this.dataSource.paginator = this.paginator;
    })  
  }
 
  displayedColumns: string[] = ['from', 'to', 'ether', 'date','transactionHash'];
  
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  openDialog(event:any,item:any):void{ 
  this.transactionHash=item;
  this.service.listAddress({"transactionHash":this.transactionHash}).subscribe((res)=>
  {console.log(res['faddress'])
  this.dialog.open(DialogOverviewExampleDialog, {
     width: '600px',
     data: {faddress: res['faddress'],taddress:res['taddress'],ether:res['ether'], transactionHash:res['transactionHash']}
  });
})
  
}

}

@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'dialog-overview-example-dialog.html',
})
export class DialogOverviewExampleDialog {

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
