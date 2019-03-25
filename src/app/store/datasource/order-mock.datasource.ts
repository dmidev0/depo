import {Injectable} from '@angular/core';
import {OrderDataSourcing} from './order.datasourcing';
import {Order} from '../models/order.model';
import {Observable, of} from 'rxjs';

@Injectable()
export class OrderMockDataSource implements OrderDataSourcing {
  save(order: Order): Observable<Order> {
    console.log('Order saved!');
    console.log(JSON.stringify(order));
    order.id = 555;
    return of(order);
  }
}
