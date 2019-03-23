import {Product} from './product.model';

export interface ProductGroup {
  category: string;
  products: Product[];
}
