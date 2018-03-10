  import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {

  @Input()
  pic: string = '/assets/dog.jpg';

  @Output()
  imageClicked: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() { }

  imageHasBeenClicked(): void {
    console.log(">>> image = ", this.pic);
    this.imageClicked.next(this.pic);
  }

}
