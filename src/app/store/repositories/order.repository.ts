import {Injectable} from '@angular/core';
import {Order, OrderRequest} from '../models/order.model';
import {OrderDataSourcing} from '../datasource/order.datasourcing';
import {map} from 'rxjs/operators';

@Injectable()
export class OrderRepository {
  constructor(private dataSource: OrderDataSourcing) {}

  saveOrder(order: Order): Promise<Order> {
    const orderRequest = this.createOrderRequest(order);
    return this.dataSource.save(orderRequest).pipe(
      map(o => {
        order.id = o.id;
        return order;
      })
    ).toPromise();
  }

  private createOrderRequest(order: Order): OrderRequest {
    return {
      phone: order.phone,
      paymentType: order.paymentType,
      cart: order.cart.getInfo(),
    };
  }
}
