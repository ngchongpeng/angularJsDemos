import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {CustomerService} from "../customer.service";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  customerId: number;
  customer: any = {};

  constructor(private router: Router, private activatedRoute: ActivatedRoute,
      private custSvc: CustomerService) { }

  ngOnInit() {
    this.customerId = this.activatedRoute.snapshot.params.cid;
    this.custSvc.getCustomerDetails(this.customerId)
      .then(result => {
        this.customer = result;
        console.log('> customer = ', this.customer);
      })
      .catch(error => {
        alert(`customer not found: ${JSON.stringify(error)}`);
      });
  }

  goBack() {
    this.router.navigate(['/customers']);
  }

}
