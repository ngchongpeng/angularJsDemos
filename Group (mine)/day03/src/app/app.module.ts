import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule } from "@angular/common/http";
import {RouterModule, Routes} from "@angular/router";

//Angular Material
import {MatListModule, MatToolbarModule} from "@angular/material";

import { AppComponent } from './app.component';
import { CustomersComponent } from './components/customers.component';
import {CustomerService} from "./customer.service";
import { DetailsComponent } from './components/details.component';

const routes: Routes = [
  { path: '', component: CustomersComponent },
  { path: 'customers', component: CustomersComponent },
  //Parameterized route
  { path: 'details/:cid', component: DetailsComponent },
  { path: "**", redirectTo: '/', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    CustomersComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    MatListModule, MatToolbarModule
  ],
  providers: [ CustomerService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
