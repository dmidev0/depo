import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Category} from '../../models/category.model';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent {

  categories: Category[] = [];

  filtered: Category[] = [];

  constructor(activatedRoute: ActivatedRoute) {
    this.categories = activatedRoute.snapshot.data.categories;
    this.filtered = this.categories.slice();
  }
}
