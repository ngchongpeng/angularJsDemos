import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import 'rxjs/add/operator/take';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class CustomerService {

  constructor(private http: HttpClient) { }

  getAllCustomers(): Promise<any> {
    return (this.http.get('/day03_web/customer')
      .take(1).toPromise());
  }

  getCustomerDetails(cid: number): Promise<any> {
    /*
    "/details/" + cid  == `/details/${cid}`
    */

    return (this.http.get(`/day03_web/details/${cid}`)
      .take(1).toPromise());
  }

}
