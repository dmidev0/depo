import {Component} from '@angular/core';
import {Cart} from '../../models/cart.model';
import {SwiperConfigInterface} from 'ngx-swiper-wrapper';

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
    mousewheel: true,
    centeredSlides: true,
    slidesPerView: 'auto',
  };

  constructor(public cart: Cart) {
  }

  get startIndex() {
    return Math.ceil(this.cart.getLines().length / 2) - 1;
  }
}
