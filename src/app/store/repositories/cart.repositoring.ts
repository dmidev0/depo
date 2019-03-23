import {Injectable} from '@angular/core';
import {CartLine} from '../models/cart.model';

@Injectable()
export abstract class CartRepositoring {
  abstract get(): Promise<CartLine[]>;

  abstract set(cartLines: CartLine[]);
}
