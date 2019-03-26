import {Component, Input} from '@angular/core';
import {Cart, CartLine} from '../../models/cart.model';
import {Router} from '@angular/router';
import {LastStoreService} from '../../services/last-store.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent {

  @Input()
  cartItem: CartLine;

  constructor(private cart: Cart, private router: Router, private lastStoreService: LastStoreService) {
  }

  onChange(quantity) {
    this.cart.updateQuantity(this.cartItem.product, quantity);
  }

  remove(e) {
    e.preventDefault();
    this.cart.removeLine(this.cartItem.product.id);
    if (!this.cart.itemCount) {
      this.router.navigateByUrl(this.lastStoreService.getStoreUrl());
    }
  }
}
