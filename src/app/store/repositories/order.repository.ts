import {Injectable} from '@angular/core';
import {Order} from '../models/order.model';
import {OrderDataSourcing} from '../datasource/order.datasourcing';

@Injectable()
export class OrderRepository {
  constructor(private dataSource: OrderDataSourcing) {}

  saveOrder(order: Order): Promise<Order> {
    return this.dataSource.save(order).toPromise();
  }
}
