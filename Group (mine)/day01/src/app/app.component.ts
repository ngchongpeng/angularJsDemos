//IMPORTS - LIBRARY
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

// IMPORTS - PROJECT
import { RSVP } from './model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  //PROPERTIES
  images = [
    //'https://www.dfordog.co.uk/user/images/funnies/dogs-hate-halloween17.jpg';
    //'http://blogs.warwick.ac.uk/images/lucyyoung/2006/10/30/yoda.jpg?maxWidth=500',
    //'https://i.ytimg.com/vi/Bj4xK2aJasU/hqdefault.jpg',
    //'http://www.shizzkabiz.com/wp-content/gallery/why-dogs-hate-halloween/dog-costume-bad-ass-undies-shades-sun-glasses.gif'
  ]
  myImage = 'https://www.dfordog.co.uk/user/images/funnies/dogs-hate-halloween17.jpg';
  private count = 0;
  allRSVPS: RSVP[] = [];
  sub: Subscription;

  //EVENT HANDLER
  newRSVP(rsvp: RSVP) {

    this.count++;
    this.allRSVPS.push(rsvp);
  }

    /*
  constructor() {
    setInterval(() => {
      console.log(">>> count: " + this.count);
      console.log(">>>> image = ", this.images[this.count]);
      this.myImage = this.images[this.count];
      this.count = ++this.count % this.images.length;
    }, 2000);
  }

  myImageHasBeenClicked(image: any) {
    console.log("In appcomponent: ", image);
      this.myImage = this.images[this.count];
      this.count = ++this.count % this.images.length;
  }
  */
}
