import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {ModelModule} from "./Model/model.module";
import {StoreModule} from "./Store/store.module";
import {RouterModule} from "@angular/router";
import {StoreComponent} from "./Store/store.component";
import {CheckoutComponent} from "./Store/checkout.component";
import {CartDetailComponent} from "./Store/cartDetail.component";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ModelModule,
    StoreModule,
    RouterModule.forRoot([
      { path: "store", component: StoreComponent },
      { path: "cart", component: CartDetailComponent },
      { path: "checkout", component: CheckoutComponent },
      { path: "**", redirectTo: "/store" }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
