import {Injectable} from '@angular/core';
import {CartRepositoring} from './cart.repositoring';
import {CartLine} from '../models/cart.model';
import {ProductDataSourcing} from '../datasource/product.datasourcing';

const KEY = 'store_cart';

@Injectable()
export class CartLocalStorageRepository extends CartRepositoring {
  constructor(private dataSource: ProductDataSourcing) {
    super();
  }

  async get(): Promise<CartLine[]> {
    const cartLines: CartLine[] = [];
    const json = localStorage.getItem(KEY);
    if (json) {
      const items = JSON.parse(json);
      const products = await this.dataSource.getProductsByIds(items.map(i => i.productId));
      products.map(p => {
        const item = items.find(i => i.productId === p.id);
        if (item) {
          cartLines.push(new CartLine(p, item.quantity));
        }
      });
    }
    return cartLines;
  }

  set(cartLines: CartLine[]) {
    const items = cartLines.map(l => ({
      productId: l.product.id,
      quantity: l.quantity,
    }));
    localStorage.setItem(KEY, JSON.stringify(items));
  }
}
