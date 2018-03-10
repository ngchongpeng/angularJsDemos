// Get module imports from libraries
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Get component imports from project
import { AppComponent } from './app.component';
import { FixerComponent } from './components/fixer.component';
import { BaseRateComponent } from './components/base-rate.component';
import { FixerService } from './fixer.service';


@NgModule({

  // Declarationgs: Make component global 
  declarations: [
    AppComponent,
    FixerComponent,
    BaseRateComponent
  ],

  // Imports: Make module global
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],

  // Providers: Make service global
  providers: [ FixerService ],

  // Target component for bootstrap
  bootstrap: [AppComponent]
})
export class AppModule { }
