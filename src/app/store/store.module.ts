import {LOCALE_ID, NgModule} from '@angular/core';
import {CommonModule, registerLocaleData} from '@angular/common';
import {StoreComponent} from './store.component';
import {RouterModule} from '@angular/router';
import {ProductsRepository} from './repositories/products.repository';
import {StaticDataSource} from './datasource/static.datasource';
import {StoreResolver} from './resolvers/store.resolver';
import { CatalogComponent } from './components/catalog/catalog.component';
import { CartIconComponent } from './components/cart-icon/cart-icon.component';
import {Cart} from './models/cart.model';
import { ProductItemComponent } from './components/product-item/product-item.component';
import localeRu from '@angular/common/locales/ru';
import {Ng2SlideDownModule} from 'ng2-slide-down';

registerLocaleData(localeRu);

const routing = RouterModule.forChild([
  {
    path: ':id',
    component: StoreComponent,
    resolve: { store: StoreResolver }
  }
]);

@NgModule({
  declarations: [StoreComponent, CatalogComponent, CartIconComponent, ProductItemComponent],
  imports: [
    CommonModule,
    routing,
    Ng2SlideDownModule
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
