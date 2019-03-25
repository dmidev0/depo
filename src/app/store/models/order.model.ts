import {Injectable} from '@angular/core';
import {Cart} from './cart.model';

@Injectable()
export class Order {
  public phone: number;
  public paymentType: any;

  constructor(public cart: Cart) {}
}
