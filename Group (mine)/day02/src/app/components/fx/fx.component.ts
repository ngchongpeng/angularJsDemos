import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import 'rxjs/add/operator/take';
import 'rxjs/add/operator/toPromise';
import { FXService } from '../../fx.service';

@Component({
  selector: 'app-fx',
  templateUrl: './fx.component.html',
  styleUrls: ['./fx.component.css']
})
export class FxComponent implements OnInit {

  rates: any = {};
  currency: string[] = [];

  //Depednency injection
  constructor(private http: HttpClient, private fxSvc: FXService) { }

  ngOnInit() {
    //this.fxSvc.getFX()
    this.fxSvc.getFXWithBase('SGD')
      .then(data => {
        this.rates = data.rates;
        this.currency = Object.keys(this.rates);
      })
      .catch(error => {
        console.error('Error: ', error);
      })
    /*
  this.http.get('https://api.fixer.io/latest')
    .subscribe(
      (data) => {
        this.rates = data.rates;
        this.currency = Object.keys(this.rates);
        console.log('>>> rates = ', this.rates);
        console.log('>>> currency = ', this.currency);
      },
      (error) => {
        console.error('Error: ', error);
      },
      () => {
        console.log('Request completed');
      }
      );
      */
  }

}
