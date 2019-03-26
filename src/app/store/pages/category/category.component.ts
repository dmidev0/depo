import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Category} from '../../models/category.model';
import {Store} from '../../models/store.model';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent {

  category: Category;
  stores: Store[];

  filtered: Store[];

  storesMessages:
    { [k: string]: string } = {'=0': 'ресторанов', '=1': 'ресторан', few: 'ресторана', other: 'ресторанов'};

  constructor(activatedRoute: ActivatedRoute) {
    this.category = activatedRoute.snapshot.data.category;
    this.stores = activatedRoute.snapshot.data.stores;
    this.filtered = this.stores.slice();
  }

  filter(query) {
    this.filtered = this.stores.filter(s =>
      s.name.toLowerCase().includes(query.toLowerCase()));
  }
}
