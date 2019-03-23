import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {Store} from '../models/store.model';

@Injectable()
export class StaticDataSource {
  private stores: Store[] = [{
    slug: 'betmen-i-uzbeki',
    type: 'Ресторан',
    name: 'Бэтмен и Узбеки',
    products: [
      {
        id: 'product1',
        name: 'Аджапсандали / AjapSandali',
        weight: '200 г.',
        price: 430,
        category: 'Холодные овощные закуски',
        description: 'овощное рагу из баклажанов, ' +
          'тушенных с луком, помидорами, болгарским перцем, морковью и зеленью / vegetable ' +
          'stew from eggplants stewed with onions, tomatoes, bell peppers, carrots and greens'
      },
      {
        id: 'product2',
        name: 'Аджапсандали / AjapSandali',
        weight: '200 г.',
        price: 430,
        category: 'Холодные овощные закуски',
        description: 'овощное рагу из баклажанов, ' +
          'тушенных с луком, помидорами, болгарским перцем, морковью и зеленью / vegetable ' +
          'stew from eggplants stewed with onions, tomatoes, bell peppers, carrots and greens'
      },
      {
        id: 'product3',
        name: 'Красное лобио с орехами и капустой по-гурийски/Red lobio with nuts and cabbage in Guria',
        weight: '200 г.',
        price: 430,
        category: 'Холодные мясные закуски',
        description: 'овощное рагу из баклажанов, ' +
          'тушенных с луком, помидорами, болгарским перцем, морковью и зеленью / vegetable ' +
          'stew from eggplants stewed with onions, tomatoes, bell peppers, carrots and greens'
      },
      {
        id: 'product4',
        name: 'Аджапсандали / AjapSandali',
        weight: '200 г.',
        price: 430,
        category: 'Холодные мясные закуски',
        description: 'овощное рагу из баклажанов, ' +
          'тушенных с луком, помидорами, болгарским перцем, морковью и зеленью / vegetable ' +
          'stew from eggplants stewed with onions, tomatoes, bell peppers, carrots and greens'
      },
    ]
  }];

  getCatalog(storeName): Observable<Store> {
    return of(this.stores.find(s => s.slug === storeName));
  }
}
