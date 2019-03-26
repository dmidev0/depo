import {Injectable} from '@angular/core';
import {StoreDataSourcing} from './store.datasourcing';
import {Observable, of} from 'rxjs';
import {Store} from '../models/store.model';

@Injectable()
export class StoreStaticDataSource implements StoreDataSourcing {
  private stores: Store[] = [
    {
      type: 'Ресторан',
      name: 'Кувшин',
      bg: '/assets/tmp/bg.jpg',
      logo: '/assets/tmp/stores/1.jpg',
      slug: 'betmen-i-uzbeki',
      category: 'kavkazskaya',
    },
    {
      type: 'Ресторан',
      name: 'Кавказский дворик',
      bg: '/assets/tmp/bg.jpg',
      logo: '/assets/tmp/stores/2.jpg',
      slug: 'kavkazskiy-dvorik',
      category: 'kavkazskaya',
    },
    {
      type: 'Ресторан',
      name: 'Пхали хинкали',
      bg: '/assets/tmp/bg.jpg',
      logo: '/assets/tmp/stores/3.jpg',
      slug: 'phali-hinkali',
      category: 'kavkazskaya',
    },
    {
      type: 'Ресторан',
      name: 'Сулугуни',
      bg: '/assets/tmp/bg.jpg',
      logo: '/assets/tmp/stores/4.jpg',
      slug: 'suluguni',
      category: 'kavkazskaya',
    }
  ];

  getByCategory(category: string): Observable<Store[]> {
    const items = this.stores.filter(s => s.category === category);
    return of(items);
  }

  getBySlug(storeSlug: string): Observable<Store> {
    const item = this.stores.find(s => s.slug === storeSlug);
    return of(item);
  }
}
