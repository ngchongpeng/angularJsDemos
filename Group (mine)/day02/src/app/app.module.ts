import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { InputGramComponent } from './components/input-gram/input-gram.component';
import { DisplayGramComponent } from './components/display-gram/display-gram.component';
import { FxComponent } from './components/fx/fx.component';
import {FXService} from './fx.service';


@NgModule({
  declarations: [
    AppComponent,
    InputGramComponent,
    DisplayGramComponent,
    FxComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ FXService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
