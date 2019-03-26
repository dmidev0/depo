import {Injectable} from '@angular/core';
import {Resolve} from '@angular/router';
import {Observable} from 'rxjs';
import {Category} from '../models/category.model';
import {CategoriesRepository} from '../repositories/categories.repository';

@Injectable()
export class CategoriesResolver implements Resolve<Observable<Category[]>> {
  constructor(private repository: CategoriesRepository) {
  }

  resolve(): Observable<Observable<Category[]>> | Promise<Observable<Category[]>> | Observable<Category[]> {
    return this.repository.getAll();
  }
}
