import {Component, Input} from '@angular/core';
import {Cart, CartLine} from '../../models/cart.model';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent {

  @Input()
  cartItem: CartLine;

  constructor(private cart: Cart) {
  }

  onChange(quantity) {
    this.cart.updateQuantity(this.cartItem.product, quantity);
  }

  remove(e) {
    e.preventDefault();
    this.cart.removeLine(this.cartItem.product.id);
  }
}
