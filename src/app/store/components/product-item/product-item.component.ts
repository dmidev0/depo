import {Component, Input} from '@angular/core';
import {Product} from '../../models/product.model';
import {Cart} from '../../models/cart.model';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent {

  @Input()
  product: Product;

  constructor(private cart: Cart) { }

  toCart(e) {
    e.preventDefault();
    if (this.product) {
      this.cart.addLine(this.product);
    }
  }
}
