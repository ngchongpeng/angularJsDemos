//IMPORTS - LIBRARY
import { Component, OnInit, ViewChild, Output, EventEmitter, OnDestroy } from '@angular/core';
import { NgForm, FormControl, NgModel } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';

//IMPORTS - PROJECT
import { RSVP } from '../model';

@Component({
  selector: 'app-rsvp',
  templateUrl: './rsvp.component.html',
  styleUrls: ['./rsvp.component.css']
})

export class RsvpComponent implements OnInit, OnDestroy {

  //PROPERTIES
  @Output() rsvp: EventEmitter<RSVP> = new EventEmitter<RSVP>();
  @ViewChild('rsvpForm') rsvpForm: NgForm;
  formSub: Subscription;
  count = 0

  //EVENT HANDLER
  processRSVP() { //WHEN BUTTON IS CLICKED

    let rsvp: RSVP = { //CREATE RSVP OBJECT
      name: this.rsvpForm.value.name,
      email: this.rsvpForm.value.email,
      phone: this.rsvpForm.value.phone,
      attending: !!this.rsvpForm.value.attending
    }

    this.rsvp.next(rsvp); //EMIT EVENT
    this.rsvpForm.reset(); //RESET FORM
  }

  //LIFECYCLE
  constructor() { }

  ngOnInit() {
    this.formSub = this.rsvpForm.valueChanges.subscribe(
      (data) => { console.log(">>> ", this.count++, "\ndata: ", data); }, //PARAMETER 1
      (error) => { console.log(">>> error: ", error); }, //PARAMETER 2
      () => { console.log(">>> completed: "); } //PARAMETER 3
    )
  }

  ngOnDestroy() {
    this.formSub.unsubscribe();
  }
}
