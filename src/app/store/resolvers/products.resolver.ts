import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve} from '@angular/router';
import {Observable} from 'rxjs';
import {ProductGroup} from '../models/product-group.model';
import {ProductsRepository} from '../repositories/products.repository';

@Injectable()
export class ProductsResolver implements Resolve<Observable<ProductGroup[]>> {
  constructor(private repository: ProductsRepository) {
  }

  resolve(route: ActivatedRouteSnapshot): Observable<Observable<ProductGroup[]>> |
                                          Promise<Observable<ProductGroup[]>> |
                                          Observable<ProductGroup[]> {
    return this.repository.getGroups(route.params.id);
  }
}
