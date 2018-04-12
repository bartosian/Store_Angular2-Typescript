import {Component} from "@angular/core";
import {Cart} from "../Model/cart.model";

@Component({
  moduleId: module.id,
  templateUrl: "cartDetail.component.html",
  styleUrls:["cartDetail.component.css"]
})
export class CartDetailComponent {
  constructor(public cart: Cart) {}
}
