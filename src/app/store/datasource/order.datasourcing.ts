import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {OrderRequest} from '../models/order.model';

@Injectable()
export abstract class OrderDataSourcing {
  abstract save(order: OrderRequest): Observable<OrderRequest>;
}
