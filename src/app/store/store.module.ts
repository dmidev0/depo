import {LOCALE_ID, NgModule} from '@angular/core';
import {CommonModule, registerLocaleData} from '@angular/common';
import {RouterModule} from '@angular/router';
import {ProductsRepository} from './repositories/products.repository';
import {StaticDataSource} from './datasource/static.datasource';
import {StoreResolver} from './resolvers/store.resolver';
import {CatalogComponent} from './pages/catalog/catalog.component';
import {CartIconComponent} from './components/cart-icon/cart-icon.component';
import {Cart} from './models/cart.model';
import {ProductItemComponent} from './components/product-item/product-item.component';
import localeRu from '@angular/common/locales/ru';
import {Ng2SlideDownModule} from 'ng2-slide-down';
import {NgScrollbarModule} from 'ngx-scrollbar';
import {CartIconDirective} from './components/cart-icon/cart-icon.directive';

registerLocaleData(localeRu);

const routing = RouterModule.forChild([
  {
    path: ':id',
    component: CatalogComponent,
    resolve: { store: StoreResolver }
  }
]);

@NgModule({
  declarations: [
    CatalogComponent,
    CartIconComponent,
    CartIconDirective,
    ProductItemComponent,
  ],
  imports: [
    CommonModule,
    routing,
    Ng2SlideDownModule,
    NgScrollbarModule
  ],
  providers: [
    ProductsRepository,
    StoreResolver,
    Cart,
    {
      provide: StaticDataSource,
      useClass: StaticDataSource,
    },
    {
      provide: LOCALE_ID,
      useValue: 'ru-RU',
    }
  ]
})
export class StoreModule { }
