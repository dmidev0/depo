import {Component} from '@angular/core';
import {Cart} from '../../models/cart.model';
import {SwiperConfigInterface} from 'ngx-swiper-wrapper';
import {LastStoreService} from '../../services/last-store.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  dishMessages:
    { [k: string]: string } = {'=0': 'Нет блюд', '=1': '1 блюдо', few: '# блюда', other: '# блюд'};

  sliderConfig: SwiperConfigInterface = {
    direction: 'horizontal',
    centeredSlides: true,
    slidesPerView: 'auto',
  };

  readonly lastStoreUrl: string;

  constructor(public cart: Cart, lastStoreService: LastStoreService) {
    this.lastStoreUrl = lastStoreService.getStoreUrl();
  }

  get startIndex() {
    return Math.ceil(this.cart.getLines().length / 2) - 1;
  }
}
