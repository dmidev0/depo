import {Directive, HostBinding, OnDestroy} from '@angular/core';
import {Cart} from '../../models/cart.model';
import {Subscription} from 'rxjs';

@Directive({
  selector: '[appCartIcon]'
})
export class CartIconDirective implements OnDestroy {
  readonly subscription: Subscription;

  @HostBinding('class.changed')
  changed = false;

  constructor(private cart: Cart) {
    this.subscription = cart.recalculateEvent().subscribe(() => {
      this.changed = true;
      setTimeout(() => this.changed = false, 200);
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
