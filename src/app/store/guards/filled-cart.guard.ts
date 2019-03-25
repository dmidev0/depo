import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {Cart} from '../models/cart.model';
import {SCHEMA_URL} from '../constants';

@Injectable()
export class FilledCartGuard {
  constructor(private cart: Cart, private router: Router) {}

  canActivate(): boolean {
    if (!this.cart.itemCount) {
      this.router.navigateByUrl(SCHEMA_URL);
      return false;
    }
    return !!this.cart.itemCount;
  }
}
