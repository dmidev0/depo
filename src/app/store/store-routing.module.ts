import {CategoriesComponent} from './pages/categories/categories.component';
import {CategoriesResolver} from './resolvers/categories.resolver';
import {CategoryComponent} from './pages/category/category.component';
import {CategoryResolver} from './resolvers/category.resolver';
import {CategoryStoresResolver} from './resolvers/category-stores.resolver';
import {CatalogComponent} from './pages/catalog/catalog.component';
import {ProductsResolver} from './resolvers/products.resolver';
import {StoreResolver} from './resolvers/store.resolver';
import {CartComponent} from './pages/cart/cart.component';
import {FilledCartGuard} from './guards/filled-cart.guard';
import {OrderComponent} from './pages/order/order.component';
import {SuccessComponent} from './pages/success/success.component';

export const storeRoutes = [
  {
    path: 'categories',
    component: CategoriesComponent,
    resolve: {categories: CategoriesResolver},
  },
  {
    path: 'category/:id',
    component: CategoryComponent,
    resolve: {
      category: CategoryResolver,
      stores: CategoryStoresResolver
    }
  },
  {
    path: 'catalog/:id',
    component: CatalogComponent,
    resolve: {
      groups: ProductsResolver,
      store: StoreResolver,
    }
  },
  {
    path: 'cart',
    component: CartComponent,
    canActivate: [FilledCartGuard],
  },
  {
    path: 'order',
    component: OrderComponent,
    canActivate: [FilledCartGuard],
  },
  {
    path: 'success/:id',
    component: SuccessComponent
  }
];
