import { Injectable } from "@angular/core";
import { Product } from "./product.model";
import { Observable } from "rxjs/Observable";
import "rxjs/add/observable/from";
import {Order} from "./order.service";


@Injectable()
export class StaticDataSource {
  private products: Product[] = [
    new Product(1, "Product 1", "Category 1", "Product 1 (Category 1)", 100, 118, "http://sagacorporation.com/upload/iblock/dc7/dc7f8f15cc6f620dd99573fbdcee722c.jpg"),
    new Product(2, "Product 2", "Category 1", "Product 2 (Category 1)", 100, 56, "http://shop.mts.ru/upload/images/Pryakhin/opisanie/galaxy-s7-edge-opisanie-2.jpg"),
    new Product(3, "Product 3", "Category 1", "Product 3 (Category 1)", 100, 95, "http://www.keepingbooks.net.au/wp-content/uploads/2014/11/phone-walking-man-600x200.jpeg"),
    new Product(4, "Product 4", "Category 1", "Product 4 (Category 1)", 100, 53, "http://appnrg.com/wp-content/uploads/2012/12/mobileonfire.jpg"),
    new Product(5, "Product 5", "Category 1", "Product 5 (Category 1)", 100, 88, "http://shop.mts.ru/upload/images/Pryakhin/meizu-opisanie-1.jpg"),
    new Product(6, "Product 6", "Category 2", "Product 6 (Category 2)", 100, 62, "http://sagacorporation.com/upload/iblock/dc7/dc7f8f15cc6f620dd99573fbdcee722c.jpg"),
    new Product(7, "Product 7", "Category 2", "Product 7 (Category 2)", 100, 180, "http://sagacorporation.com/upload/iblock/dc7/dc7f8f15cc6f620dd99573fbdcee722c.jpg"),
    new Product(8, "Product 8", "Category 2", "Product 8 (Category 2)", 100, 76, "http://sagacorporation.com/upload/iblock/dc7/dc7f8f15cc6f620dd99573fbdcee722c.jpg"),
    new Product(9, "Product 9", "Category 2", "Product 9 (Category 2)", 100, 44, "http://sagacorporation.com/upload/iblock/dc7/dc7f8f15cc6f620dd99573fbdcee722c.jpg"),
    new Product(10, "Product 10", "Category 2", "Product 10 (Category 2)", 100, 91, "http://sagacorporation.com/upload/iblock/dc7/dc7f8f15cc6f620dd99573fbdcee722c.jpg"),
    new Product(11, "Product 11", "Category 3", "Product 11 (Category 3)", 100, 112, "http://sagacorporation.com/upload/iblock/dc7/dc7f8f15cc6f620dd99573fbdcee722c.jpg"),
    new Product(12, "Product 12", "Category 3", "Product 12 (Category 3)", 100, 95, "http://sagacorporation.com/upload/iblock/dc7/dc7f8f15cc6f620dd99573fbdcee722c.jpg"),
    new Product(13, "Product 13", "Category 3", "Product 13 (Category 3)", 100, 64, "http://sagacorporation.com/upload/iblock/dc7/dc7f8f15cc6f620dd99573fbdcee722c.jpg"),
    new Product(14, "Product 14", "Category 3", "Product 14 (Category 3)", 100, 90, "http://sagacorporation.com/upload/iblock/dc7/dc7f8f15cc6f620dd99573fbdcee722c.jpg"),
    new Product(15, "Product 15", "Category 3", "Product 15 (Category 3)", 100, 96, "http://sagacorporation.com/upload/iblock/dc7/dc7f8f15cc6f620dd99573fbdcee722c.jpg"),
  ];
  getProducts(): Observable<Product[]> {
    return Observable.from([this.products]);
  }
  saveOrder(order: Order): Observable<Order> {
    console.log(JSON.stringify(order));
    return Observable.from([order]);
  }

}
