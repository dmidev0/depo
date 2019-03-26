import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {Product} from '../models/product.model';
import {ProductDataSourcing} from './product.datasourcing';

@Injectable()
export class ProductStaticDataSource extends ProductDataSourcing {

  private products: Product[] = [
    {
      id: 'product1',
      name: 'Аджапсандали / AjapSandali',
      shortName: 'Аджапсандали',
      weight: '200 г.',
      price: 430,
      category: 'Холодные овощные закуски',
      image: '/assets/tmp/products/1.jpg',
      store: 'betmen-i-uzbeki',
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
      store: 'betmen-i-uzbeki',
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
      store: 'betmen-i-uzbeki',
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
      store: 'betmen-i-uzbeki',
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
      store: 'betmen-i-uzbeki',
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
      store: 'betmen-i-uzbeki',
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
      store: 'betmen-i-uzbeki',
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
      store: 'betmen-i-uzbeki',
      category: 'Холодные мясные закуски',
      image: '/assets/tmp/products/4.jpg',
      description: 'овощное рагу из баклажанов, ' +
        'тушенных с луком, помидорами, болгарским перцем, морковью и зеленью / vegetable ' +
        'stew from eggplants stewed with onions, tomatoes, bell peppers, carrots and greens'
    },
  ];

  getProductsByIds(ids: string[]): Promise<Product[]> {
    const products: Product[] = [];
    this.products.forEach(product => {
      if (ids.indexOf(product.id) > -1) {
        products.push(product);
      }
    });
    return Promise.resolve(products);
  }

  getByStoreSlug(storeSlug: string): Observable<Product[]> {
    const products = this.products.filter(p => p.store === storeSlug);
    console.log(storeSlug, products);
    return of(products);
  }
}
