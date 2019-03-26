import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Category} from '../models/category.model';

@Injectable()
export abstract class CategoryDataSourcing {
  abstract getAll(): Observable<Category[]>;
}
