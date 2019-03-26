import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Product} from '../models/product.model';

@Injectable()
export abstract class ProductDataSourcing {
  abstract getByStoreSlug(storeSlug: string): Observable<Product[]>;

  abstract getProductsByIds(ids: string[]): Promise<Product[]>;
}
