import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/service/customer.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  tableData: any[] = [];
  columns: string[] = [
    "Reference", "Cust Number", 
    "Cust Name", "Cust Addr.", 
    "Phone No.", "Amount", "Currency", 
    "Benificiary Bank", "Benificiary Acc",
    "Detail",
  ]
  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
    this.customerService.getData().subscribe((res: any[]) => {
      if(res.length > 0) {
        this.tableData = res;
      }
    })
  }

}
