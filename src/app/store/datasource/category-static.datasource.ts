import {Injectable} from '@angular/core';
import {CategoryDataSourcing} from './category.datasourcing';
import {Category} from '../models/category.model';
import {Observable, of} from 'rxjs';

@Injectable()
export class CategoryStaticDataSource extends CategoryDataSourcing {
  private categories: Category[] = [
    {
      id: 'kavkazskaya',
      name: 'Кавказская кухня',
      photo: '/assets/tmp/categories/1.jpg'
    },
    {
      id: 'aziatskaya',
      name: 'Азиатская кухня',
      photo: '/assets/tmp/categories/2.jpg'
    },
    {
      id: 'evropejskaya',
      name: 'Европейская кухня',
      photo: '/assets/tmp/categories/3.jpg'
    },
    {
      id: 'panaziatskaya',
      name: 'Паназиатская кухня',
      photo: '/assets/tmp/categories/4.jpg'
    },
    {
      id: 'cat5',
      name: 'Другая кухня',
      photo: '/assets/tmp/categories/5.jpg'
    },
    {
      id: 'cat6',
      name: 'Другая кухня',
      photo: '/assets/tmp/categories/6.jpg'
    },
    {
      id: 'cat7',
      name: 'Другая кухня',
      photo: '/assets/tmp/categories/7.jpg'
    },
    {
      id: 'cat8',
      name: 'Другая кухня',
      photo: '/assets/tmp/categories/8.jpg'
    },
  ];

  getAll(): Observable<Category[]> {
    return of(this.categories);
  }
}
