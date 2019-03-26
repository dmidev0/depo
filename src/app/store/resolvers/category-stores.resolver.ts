import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve} from '@angular/router';
import {Observable} from 'rxjs';
import {Store} from '../models/store.model';
import {StoreRepository} from '../repositories/store.repository';

@Injectable()
export class CategoryStoresResolver implements Resolve<Observable<Store[]>> {
  constructor(private repository: StoreRepository) {
  }

  resolve(route: ActivatedRouteSnapshot): Observable<Observable<Store[]>> | Promise<Observable<Store[]>> | Observable<Store[]> {
    const category = route.params.id;
    return this.repository.getStoresByCategory(category);
  }
}
