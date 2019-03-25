import {Injectable} from '@angular/core';
import {Cart} from './cart.model';

@Injectable()
export class Order {
  public id?: number;
  public phone: number;
  public paymentType: any;

  constructor(public cart: Cart) {}

  clear() {
    this.id = this.phone = this.paymentType = null;
    this.cart.clear();
  }
}
