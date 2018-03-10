import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import the modules
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ImageComponent } from './components/image.component';
import { RsvpComponent } from './components/rsvp.component';
import { CdComponent } from './components/cd/cd.component';

@NgModule({
  declarations: [
    AppComponent,
    ImageComponent,
    RsvpComponent,
    CdComponent
  ],
  imports: [
    BrowserModule,
    //Use in the Angular module
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [ ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
