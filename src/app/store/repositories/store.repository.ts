import {Injectable} from '@angular/core';
import {StoreDataSourcing} from '../datasource/store.datasourcing';
import {Observable} from 'rxjs';
import {Store} from '../models/store.model';

@Injectable()
export class StoreRepository {
  constructor(private dataSource: StoreDataSourcing) {
  }

  getStoresByCategory(category): Observable<Store[]> {
    return this.dataSource.getByCategory(category);
  }

  getStoreBySlug(storeSlug: string): Observable<Store> {
    return this.dataSource.getBySlug(storeSlug);
  }
}
