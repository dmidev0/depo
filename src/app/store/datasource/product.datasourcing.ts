import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Store} from '../models/store.model';
import {Product} from '../models/product.model';

@Injectable()
export abstract class ProductDataSourcing {
  abstract getCatalog(storeName): Observable<Store>;

  abstract getProductsByIds(ids: string[]): Promise<Product[]>;
}
