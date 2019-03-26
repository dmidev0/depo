import {Injectable} from '@angular/core';
import {CategoryDataSourcing} from '../datasource/category.datasourcing';
import {Observable} from 'rxjs';
import {Category} from '../models/category.model';

@Injectable()
export class CategoriesRepository {
  constructor(private dataSource: CategoryDataSourcing) {
  }

  getAll(): Observable<Category[]> {
    return this.dataSource.getAll();
  }
}
