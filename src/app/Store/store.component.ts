import {Component} from "@angular/core";
import {ProductRepository} from "../Model/product.repository";
import {Product} from "../Model/product.model";
import {Cart} from "../Model/cart.model";
import {Router} from "@angular/router";

@Component({
  selector: "store",
  moduleId: module.id,
  templateUrl: "store.component.html",
  styleUrls:["store.component.css"]
})
export class StoreComponent {
  public selectedCategory = null;
  public productsPerPage = 4;
  public selectedPage = 1;

  constructor( private repository: ProductRepository,
               private cart: Cart,
               private router: Router) {}

  get products(): Product[] {
    let pageIndex = (this.selectedPage - 1) * this.productsPerPage;
    return this.repository.getProducts(this.selectedCategory)
      .slice(pageIndex, pageIndex + this.productsPerPage);
  }
    get categories(): String[] {
    return this.repository.getCategories();
  }
  changeCategory(newCategory?: string) {
    this.selectedCategory = newCategory;
  }
  changePage(newPage: number) {
    this.selectedPage = newPage;
  }
  changePageSize(newPageSize: number) {
    this.productsPerPage = Number(newPageSize);
    this.changePage(1);
  }
  get pageCount(): number {
    return Math.ceil(this.repository
      .getProducts(this.selectedCategory).length / this.productsPerPage)
  }
  addProductToCart(product: Product) {
    this.cart.addLine(product);
    this.router.navigateByUrl('/cart');
  }
}
