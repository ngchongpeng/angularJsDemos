import { Component, OnInit, Input } from '@angular/core';
import {Gram} from '../../model';

@Component({
  selector: 'app-display-gram',
  templateUrl: './display-gram.component.html',
  styleUrls: ['./display-gram.component.css']
})

export class DisplayGramComponent implements OnInit {

  //PROPERTIES
  @Input() gram: Gram;
  
  //CONSTRUCTOR
  constructor() { }

  //ONINIT
  ngOnInit() {
  }

}
