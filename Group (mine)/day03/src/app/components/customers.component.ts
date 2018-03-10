import { Component, OnInit } from '@angular/core';
import {CustomerService} from "../customer.service";

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  customers: any[] = [];

  constructor(private custSvc: CustomerService) { }

  ngOnInit() {
    this.custSvc.getAllCustomers()
      .then(result => {
        this.customers = result;
        console.log('> customers = ', this.customers);
      });
  }

}
