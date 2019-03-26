import {LOCALE_ID, NgModule} from '@angular/core';
import {CommonModule, registerLocaleData} from '@angular/common';
import {ProductsRepository} from './repositories/products.repository';
import {StoresResolver} from './resolvers/stores.resolver';
import {CatalogComponent} from './pages/catalog/catalog.component';
import {CartIconComponent} from './components/cart-icon/cart-icon.component';
import {Cart} from './models/cart.model';
import {ProductItemComponent} from './components/product-item/product-item.component';
import localeRu from '@angular/common/locales/ru';
import {Ng2SlideDownModule} from 'ng2-slide-down';
import {NgScrollbarModule} from 'ngx-scrollbar';
import {CartIconDirective} from './components/cart-icon/cart-icon.directive';
import {CartComponent} from './pages/cart/cart.component';
import {StoreHeaderComponent} from './components/store-header/store-header.component';
import {CartRepositoring} from './repositories/cart.repositoring';
import {CartLocalStorageRepository} from './repositories/cart-local-storage.repository';
import {ProductDataSourcing} from './datasource/product.datasourcing';
import {ProductStaticDataSource} from './datasource/product-static.datasource';
import {SwiperModule} from 'ngx-swiper-wrapper';
import {CartItemComponent} from './components/cart-item/cart-item.component';
import {CounterComponent} from './components/counter/counter.component';
import {OrderComponent} from './pages/order/order.component';
import {NgxMaskModule} from 'ngx-mask';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FilledCartGuard} from './guards/filled-cart.guard';
import {LastStoreService} from './services/last-store.service';
import {SuccessComponent} from './pages/success/success.component';
import {OrderRepository} from './repositories/order.repository';
import {OrderDataSourcing} from './datasource/order.datasourcing';
import {OrderMockDataSource} from './datasource/order-mock.datasource';
import {Order} from './models/order.model';
import { CategoriesComponent } from './pages/categories/categories.component';
import {CategoryDataSourcing} from './datasource/category.datasourcing';
import {CategoryStaticDataSource} from './datasource/category-static.datasource';
import {CategoriesRepository} from './repositories/categories.repository';
import {CategoriesResolver} from './resolvers/categories.resolver';
import { SearchStringComponent } from './components/search-string/search-string.component';
import { CategoryComponent } from './pages/category/category.component';
import {CategoryResolver} from './resolvers/category.resolver';
import {StoreRepository} from './repositories/store.repository';
import {StoreDataSourcing} from './datasource/store.datasourcing';
import {StoreStaticDataSource} from './datasource/store-static.datasource';
import {CategoryStoresResolver} from './resolvers/category-stores.resolver';
import {ProductsResolver} from './resolvers/products.resolver';
import {StoreResolver} from './resolvers/store.resolver';
import {RouterModule} from '@angular/router';

registerLocaleData(localeRu);

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
    OrderComponent,
    SuccessComponent,
    CategoriesComponent,
    SearchStringComponent,
    CategoryComponent,
  ],
  imports: [
    CommonModule,
    Ng2SlideDownModule,
    NgScrollbarModule,
    SwiperModule,
    NgxMaskModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  providers: [
    ProductsRepository,
    StoresResolver,
    Cart,
    FilledCartGuard,
    LastStoreService,
    Order,
    OrderRepository,
    CategoriesRepository,
    CategoriesResolver,
    CategoryResolver,
    StoreRepository,
    CategoryStoresResolver,
    StoreResolver,
    ProductsResolver,
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
    },
    {
      provide: OrderDataSourcing,
      useClass: OrderMockDataSource,
    },
    {
      provide: CategoryDataSourcing,
      useClass: CategoryStaticDataSource,
    },
    {
      provide: StoreDataSourcing,
      useClass: StoreStaticDataSource,
    }
  ]
})
export class StoreModule { }
