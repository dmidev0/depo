import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Order} from '../models/order.model';

@Injectable()
export abstract class OrderDataSourcing {
  abstract save(order: Order): Observable<Order>;
}
