import {Injectable} from '@angular/core';
import {StaticDataSource} from '../datasource/static.datasource';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {ProductGroup} from '../models/product-group.model';
import {Store} from '../models/store.model';

@Injectable()
export class ProductsRepository {

  constructor(private dataSource: StaticDataSource) {}

  getCatalog(storeName): Observable<Store> {
    return this.dataSource.getCatalog(storeName).pipe(
      map(store => {
        const groupsMap = new Map();
        store.products.forEach(p => {
          const group = groupsMap.get(p.category);
          const products = group ? group.products : [];
          groupsMap.set(p.category, {
            category: p.category,
            products: [...products, p],
          } as ProductGroup);
        });
        store.groups = Array.from(groupsMap.values());
        return store;
      })
    );
  }
}
