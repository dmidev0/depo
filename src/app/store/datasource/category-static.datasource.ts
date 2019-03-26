import {Injectable} from '@angular/core';
import {CategoryDataSourcing} from './category.datasourcing';
import {Category} from '../models/category.model';
import {Observable, of} from 'rxjs';

@Injectable()
export class CategoryStaticDataSource extends CategoryDataSourcing {
  private categories: Category[] = [
    {
      slug: 'kavkazskaya',
      name: 'Кавказская кухня',
      photo: '/assets/tmp/categories/1.jpg',
      bg: '/assets/tmp/categories/1-bg.jpg',
    },
    {
      slug: 'aziatskaya',
      name: 'Азиатская кухня',
      photo: '/assets/tmp/categories/2.jpg',
      bg: '/assets/tmp/categories/1-bg.jpg',
    },
    {
      slug: 'evropejskaya',
      name: 'Европейская кухня',
      photo: '/assets/tmp/categories/3.jpg',
      bg: '/assets/tmp/categories/1-bg.jpg',
    },
    {
      slug: 'panaziatskaya',
      name: 'Паназиатская кухня',
      photo: '/assets/tmp/categories/4.jpg',
      bg: '/assets/tmp/categories/1-bg.jpg',
    },
    {
      slug: 'cat5',
      name: 'Другая кухня',
      photo: '/assets/tmp/categories/5.jpg',
      bg: '/assets/tmp/categories/1-bg.jpg',
    },
    {
      slug: 'cat6',
      name: 'Другая кухня',
      photo: '/assets/tmp/categories/6.jpg',
      bg: '/assets/tmp/categories/1-bg.jpg',
    },
    {
      slug: 'cat7',
      name: 'Другая кухня',
      photo: '/assets/tmp/categories/7.jpg',
      bg: '/assets/tmp/categories/1-bg.jpg',
    },
    {
      slug: 'cat8',
      name: 'Другая кухня',
      photo: '/assets/tmp/categories/8.jpg',
      bg: '/assets/tmp/categories/1-bg.jpg',
    },
  ];

  getAll(): Observable<Category[]> {
    return of(this.categories);
  }

  getBySlug(slug): Observable<Category> {
    const category = this.categories.find(c => c.slug === slug);
    return of(category);
  }
}
