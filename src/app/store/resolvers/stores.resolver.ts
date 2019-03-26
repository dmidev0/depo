import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve} from '@angular/router';
import {Observable} from 'rxjs';
import {Store} from '../models/store.model';
import {StoreRepository} from '../repositories/store.repository';

@Injectable()
export class StoresResolver implements Resolve<Observable<Store[]>> {
  constructor(private storeRepository: StoreRepository) {}

  resolve(route: ActivatedRouteSnapshot): Observable<Observable<Store[]>> |
                                          Promise<Observable<Store[]>> |
                                          Observable<Store[]> {
    return this.storeRepository.getStoresByCategory(route.params.id);
  }
}
