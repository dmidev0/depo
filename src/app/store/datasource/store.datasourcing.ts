import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Store} from '../models/store.model';

@Injectable()
export abstract class StoreDataSourcing {
  abstract getByCategory(category: string): Observable<Store[]>;

  abstract getBySlug(storeSlug: string): Observable<Store>;
}
