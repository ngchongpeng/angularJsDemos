// Page imports from libraries
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

// Page imports from project
import {FixerService} from '../fixer.service';

// Annotations
@Component({
  selector: 'app-base-rate',
  templateUrl: './base-rate.component.html',
  styleUrls: ['./base-rate.component.css']
})

// Component
export class BaseRateComponent implements OnInit {

  // Properties - Html reference
  @ViewChild('baseRateForm')
  baseRateForm: NgForm;

  // Methods - Constructor
  constructor(private fixerSvc: FixerService) { }

  // Methods - Lifecycle - Initialization
  ngOnInit() { }

  // Method - Event handler >>> when submit button is pressed
  getExchangeRates() {
    
    // Write to console
    console.log('>> base rate: ', this.baseRateForm.value.baseRate);

    // Emit event(baseRateEvent)
    this.fixerSvc.baseRateEvent.next(this.baseRateForm.value.baseRate);
  }
}
