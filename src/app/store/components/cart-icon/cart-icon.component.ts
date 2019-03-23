import {Component} from '@angular/core';
import {Cart} from '../../models/cart.model';

@Component({
  selector: 'app-cart-icon',
  templateUrl: './cart-icon.component.html',
  styleUrls: ['./cart-icon.component.scss']
})
export class CartIconComponent {

  constructor(public cart: Cart) {}
}
