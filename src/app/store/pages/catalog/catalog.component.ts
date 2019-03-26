import {AfterViewInit, Component} from '@angular/core';
import {Store} from '../../models/store.model';
import {ActivatedRoute} from '@angular/router';
import {LastStoreService} from '../../services/last-store.service';
import {ProductGroup} from '../../models/product-group.model';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements AfterViewInit {

  store: Store;
  groups: ProductGroup[] = [];
  isLoaded = false;

  constructor(private activatedRoute: ActivatedRoute, lastStoreService: LastStoreService) {
    this.store = activatedRoute.snapshot.data.store;
    this.groups = activatedRoute.snapshot.data.groups;
    lastStoreService.setStore(this.store.slug);
  }

  activeCategory = '';

  toggleCategory(categoryName) {
    this.activeCategory = this.isActiveCategory(categoryName) ? '' : categoryName;
  }

  isActiveCategory(categoryName) {
    return categoryName === this.activeCategory;
  }

  ngAfterViewInit(): void {
    setTimeout(() => this.isLoaded = true, 0);
  }
}
