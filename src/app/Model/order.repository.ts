import {Injectable} from "@angular/core";
import {Order} from "./order.service";
import {StaticDataSource} from "./static.datasource";
import {Observable} from "rxjs/Observable";

@Injectable()
export class OrderRepository {
  private orders: Order[] = [];
  constructor(private dataSource: StaticDataSource) {}
  getOrders(): Order[] {
    return this.orders;
  }
  saveOrder(order: Order): Observable<Order> {
    return this.dataSource.saveOrder(order);
  }
}

