import {Injectable} from '@angular/core';
import {map} from 'rxjs/operators';
import {ProductGroup} from '../models/product-group.model';
import {ProductDataSourcing} from '../datasource/product.datasourcing';
import {Observable} from 'rxjs';

@Injectable()
export class ProductsRepository {

  constructor(private dataSource: ProductDataSourcing) {}

  getGroups(storeSlug): Observable<ProductGroup[]> {
    return this.dataSource.getByStoreSlug(storeSlug).pipe(
      map(products => {
        const groupsMap = new Map();
        products.forEach(product => {
          const group = groupsMap.get(product.category);
          const groupProducts = group ? group.products : [];
          groupsMap.set(product.category, {
            category: product.category,
            products: [...groupProducts, product],
          } as ProductGroup);
        });
        return Array.from(groupsMap.values());
      })
    );
  }
}
