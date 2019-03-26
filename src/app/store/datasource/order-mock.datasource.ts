import {Injectable} from '@angular/core';
import {OrderDataSourcing} from './order.datasourcing';
import {OrderRequest} from '../models/order.model';
import {Observable, of} from 'rxjs';

@Injectable()
export class OrderMockDataSource implements OrderDataSourcing {
  save(order: OrderRequest): Observable<OrderRequest> {
    console.log('Order saved!');
    console.log(JSON.stringify(order));
    order.id = 555;
    return of(order);
  }
}
