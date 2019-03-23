import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {Store} from '../models/store.model';
import {Product} from '../models/product.model';
import {ProductDataSourcing} from './product.datasourcing';

@Injectable()
export class ProductStaticDataSource extends ProductDataSourcing {
  private stores: Store[] = [{
    slug: 'betmen-i-uzbeki',
    type: 'Ресторан',
    bg: '/assets/tmp/bg.jpg',
    name: 'Бэтмен и Узбеки',
    products: [
      {
        id: 'product1',
        name: 'Аджапсандали / AjapSandali',
        shortName: 'Аджапсандали',
        weight: '200 г.',
        price: 430,
        category: 'Холодные овощные закуски',
        image: '/assets/tmp/products/1.jpg',
        description: 'овощное рагу из баклажанов, ' +
          'тушенных с луком, помидорами, болгарским перцем, морковью и зеленью / vegetable ' +
          'stew from eggplants stewed with onions, tomatoes, bell peppers, carrots and greens'
      },
      {
        id: 'product2',
        name: 'Аджапсандали / AjapSandali',
        shortName: 'Аджапсандали',
        weight: '200 г.',
        price: 430,
        category: 'Холодные овощные закуски',
        image: '/assets/tmp/products/2.jpg',
        description: 'овощное рагу из баклажанов, ' +
          'тушенных с луком, помидорами, болгарским перцем, морковью и зеленью / vegetable ' +
          'stew from eggplants stewed with onions, tomatoes, bell peppers, carrots and greens'
      },
      {
        id: 'product5',
        name: 'Аджапсандали / AjapSandali',
        shortName: 'Аджапсандали',
        weight: '200 г.',
        price: 430,
        category: 'Холодные овощные закуски',
        image: '/assets/tmp/products/3.jpg',
        description: 'овощное рагу из баклажанов, ' +
          'тушенных с луком, помидорами, болгарским перцем, морковью и зеленью / vegetable ' +
          'stew from eggplants stewed with onions, tomatoes, bell peppers, carrots and greens'
      },
      {
        id: 'product6',
        name: 'Аджапсандали / AjapSandali',
        shortName: 'Аджапсандали',
        weight: '200 г.',
        price: 430,
        category: 'Холодные овощные закуски',
        image: '/assets/tmp/products/4.jpg',
        description: 'овощное рагу из баклажанов, ' +
          'тушенных с луком, помидорами, болгарским перцем, морковью и зеленью / vegetable ' +
          'stew from eggplants stewed with onions, tomatoes, bell peppers, carrots and greens'
      },
      {
        id: 'product7',
        name: 'Аджапсандали / AjapSandali',
        shortName: 'Аджапсандали',
        weight: '200 г.',
        price: 430,
        category: 'Холодные овощные закуски',
        image: '/assets/tmp/products/1.jpg',
        description: 'овощное рагу из баклажанов, ' +
          'тушенных с луком, помидорами, болгарским перцем, морковью и зеленью / vegetable ' +
          'stew from eggplants stewed with onions, tomatoes, bell peppers, carrots and greens'
      },
      {
        id: 'product8',
        name: 'Аджапсандали / AjapSandali',
        shortName: 'Аджапсандали',
        weight: '200 г.',
        price: 430,
        category: 'Холодные овощные закуски',
        image: '/assets/tmp/products/2.jpg',
        description: 'овощное рагу из баклажанов, ' +
          'тушенных с луком, помидорами, болгарским перцем, морковью и зеленью / vegetable ' +
          'stew from eggplants stewed with onions, tomatoes, bell peppers, carrots and greens'
      },
      {
        id: 'product3',
        name: 'Красное лобио с орехами и капустой по-гурийски/Red lobio with nuts and cabbage in Guria',
        shortName: 'Красное лобио с орехами и капустой по-гурийски',
        weight: '200 г.',
        price: 430,
        category: 'Холодные мясные закуски',
        image: '/assets/tmp/products/3.jpg',
        description: 'овощное рагу из баклажанов, ' +
          'тушенных с луком, помидорами, болгарским перцем, морковью и зеленью / vegetable ' +
          'stew from eggplants stewed with onions, tomatoes, bell peppers, carrots and greens'
      },
      {
        id: 'product4',
        name: 'Аджапсандали / AjapSandali',
        shortName: 'Аджапсандали',
        weight: '200 г.',
        price: 430,
        category: 'Холодные мясные закуски',
        image: '/assets/tmp/products/4.jpg',
        description: 'овощное рагу из баклажанов, ' +
          'тушенных с луком, помидорами, болгарским перцем, морковью и зеленью / vegetable ' +
          'stew from eggplants stewed with onions, tomatoes, bell peppers, carrots and greens'
      },
    ]
  }];

  getCatalog(storeName): Observable<Store> {
    return of(this.stores.find(s => s.slug === storeName));
  }

  getProductsByIds(ids: string[]): Promise<Product[]> {
    const products: Product[] = [];
    this.stores.forEach(store => {
      store.products.forEach(product => {
        if (ids.indexOf(product.id) > -1) {
          products.push(product);
        }
      });
    });
    return Promise.resolve(products);
  }
}
