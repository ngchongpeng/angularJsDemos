import { Component } from '@angular/core';
import {Gram} from './model';

import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  //PROPERTIES
  myGrams: Gram[] = [];

  constructor() {
    /*
    Observable.fromEvent(document, 'mousemove')
      .subscribe(
        (data) => { console.log(">>>> data = ", data) }
      )
      */
  }

  // EVENT HANDLER
  handleNewGram(gram: Gram) {
    this.myGrams.unshift(gram);
    console.log(">>> received new gram: ", gram);
  }
}
