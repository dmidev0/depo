import {Component, Input} from '@angular/core';
import {Store} from '../../models/store.model';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent {

  @Input()
  store: Store;

  activeCategory = '';

  toggleCategory(categoryName) {
    this.activeCategory = this.isActiveCategory(categoryName) ? '' : categoryName;
  }

  isActiveCategory(categoryName) {
    return categoryName === this.activeCategory;
  }
}
