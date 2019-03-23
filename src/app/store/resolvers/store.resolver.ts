import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve} from '@angular/router';
import {Observable} from 'rxjs';
import {ProductsRepository} from '../repositories/products.repository';
import {Store} from '../models/store.model';

@Injectable()
export class StoreResolver implements Resolve<Observable<Store>> {
  constructor(private productsRepository: ProductsRepository) {}

  resolve(route: ActivatedRouteSnapshot): Observable<Observable<Store>> |
                                          Promise<Observable<Store>> |
                                          Observable<Store> {
    return this.productsRepository.getCatalog(route.params.id);
  }
}
