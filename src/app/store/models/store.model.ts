import {Product} from './product.model';
import {ProductGroup} from './product-group.model';

export class Store {
  type: string;
  name: string;
  products: Product[];
  slug?: string;
  groups?: ProductGroup[];
}
