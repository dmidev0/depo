import {LOCALE_ID, NgModule} from '@angular/core';
import {CommonModule, registerLocaleData} from '@angular/common';
import {RouterModule} from '@angular/router';
import {ProductsRepository} from './repositories/products.repository';
import {StoreResolver} from './resolvers/store.resolver';
import {CatalogComponent} from './pages/catalog/catalog.component';
import {CartIconComponent} from './components/cart-icon/cart-icon.component';
import {Cart} from './models/cart.model';
import {ProductItemComponent} from './components/product-item/product-item.component';
import localeRu from '@angular/common/locales/ru';
import {Ng2SlideDownModule} from 'ng2-slide-down';
import {NgScrollbarModule} from 'ngx-scrollbar';
import {CartIconDirective} from './components/cart-icon/cart-icon.directive';
import { CartComponent } from './pages/cart/cart.component';
import { StoreHeaderComponent } from './components/store-header/store-header.component';
import {CartRepositoring} from './repositories/cart.repositoring';
import {CartLocalStorageRepository} from './repositories/cart-local-storage.repository';
import {ProductDataSourcing} from './datasource/product.datasourcing';
import {ProductStaticDataSource} from './datasource/product-static.datasource';
import {SwiperModule} from 'ngx-swiper-wrapper';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import { CounterComponent } from './components/counter/counter.component';

registerLocaleData(localeRu);

const routing = RouterModule.forChild([
  {
    path: 'catalog/:id',
    component: CatalogComponent,
    resolve: { store: StoreResolver }
  },
  {
    path: 'cart',
    component: CartComponent
  }
]);

@NgModule({
  declarations: [
    CatalogComponent,
    CartIconComponent,
    CartIconDirective,
    ProductItemComponent,
    CartComponent,
    StoreHeaderComponent,
    CartItemComponent,
    CounterComponent,
  ],
  imports: [
    CommonModule,
    routing,
    Ng2SlideDownModule,
    NgScrollbarModule,
    SwiperModule,
  ],
  providers: [
    ProductsRepository,
    StoreResolver,
    Cart,
    {
      provide: ProductDataSourcing,
      useClass: ProductStaticDataSource,
    },
    {
      provide: LOCALE_ID,
      useValue: 'ru-RU',
    },
    {
      provide: CartRepositoring,
      useClass: CartLocalStorageRepository,
    }
  ]
})
export class StoreModule { }
