// Page imports from libraries
import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Subscription } from 'rxjs/Subscription';

// Page imports from another library
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/toPromise';

// Page imports from project
import {FixerService} from '../fixer.service';

// Annotations
@Component({
  selector: 'app-fixer',
  templateUrl: './fixer.component.html',
  styleUrls: ['./fixer.component.css']
})

// Class
export class FixerComponent implements OnInit, OnDestroy {

  // Properties - Input
  @Input()
  baseRate = 'SGD';

  // Properties - Public
  rates = {};
  currencies = [];

  // Properties - Local
  private sub: Subscription;

  // Method - Constructor
  constructor(private http: HttpClient, private fixerSvc: FixerService) { }

  // Method - Lifecycle - Initialization
  ngOnInit() {

    // Set subscription to listen on event(fixerSvc.baseRateEvent)
    this.sub = this.fixerSvc
      .baseRateEvent
      .subscribe(
      // Success - methods to perform
      (data) => {
        // Write to console
        console.log('>>> fixer service event: ', data);
        // Call fixerSvc to get exchange rate, and then take the returned rates to assign to this.rates
        this.fixerSvc.getExchangeRate(data).then((rates) => { this.rates = rates; });
      },

      // Error - methods to perform
      (error) => { console.log('>>> fixer service error: ', error); }
      );

    // Get the promise
    this.fixerSvc.getExchangeRate(this.baseRate) //this returns a promise
      .then(rates => {  
        // Performs the following methods with the returned 'rates' object
        console.log('>>> rates: ', rates);
        this.rates = rates;
        this.currencies = Object.keys(this.rates);
      }).catch(error => {
        console.log('>> error: ', error);
      });
  }

  // Method - Lifecycle - Destroy
  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
