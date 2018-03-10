import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Gram } from '../../model';

@Component({
  selector: 'app-input-gram',
  templateUrl: './input-gram.component.html',
  styleUrls: ['./input-gram.component.css']
})

export class InputGramComponent implements OnInit {

  //PROPERTIES
  @ViewChild('inputGramForm')
  inputGramForm: NgForm;

  @Output()
  newInstagram: EventEmitter<Gram> = new EventEmitter<Gram>();

  //CONSTRUCTOR
  constructor() { }

  //ONINIT
  ngOnInit() { }

  //EVENT HANDLER
  addInstagram() {

    const gram = {
      title: this.inputGramForm.value.title,
      imageUrl: this.inputGramForm.value.imageUrl,
      timestamp: new Date()
    }

    // console.log(">>>> adding new instagram: ", gram);

    //this.newInstagram.emit(gram); - same as next
    this.newInstagram.next(gram);
    this.inputGramForm.reset();
  }
}
