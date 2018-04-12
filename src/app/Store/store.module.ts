import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {ModelModule} from "../Model/model.module";
import {StoreComponent} from "./store.component";
import {FormsModule} from "@angular/forms";
import {CounterDirective} from "./counter.directive";
import {CartSummaryComponent} from "./cartSummary.component";
import {CartDetailComponent} from "./cartDetail.component";
import {CheckoutComponent} from "./checkout.component";
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [
    BrowserModule, ModelModule, FormsModule, RouterModule],
  declarations: [
    StoreComponent,
    CounterDirective,
    CartSummaryComponent,
    CartDetailComponent,
    CheckoutComponent
  ],
  exports: [StoreComponent,
            CartDetailComponent,
            CheckoutComponent
  ]
})
export class StoreModule {}
