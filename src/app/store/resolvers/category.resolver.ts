import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve} from '@angular/router';
import {Observable} from 'rxjs';
import {CategoriesRepository} from '../repositories/categories.repository';
import {Category} from '../models/category.model';

@Injectable()
export class CategoryResolver implements Resolve<Observable<Category>> {
  constructor(private repository: CategoriesRepository) {
  }

  resolve(route: ActivatedRouteSnapshot): Observable<Observable<Category>> | Promise<Observable<Category>> | Observable<Category> {
    const category = route.params.id;
    return this.repository.getBySlug(category);
  }
}
