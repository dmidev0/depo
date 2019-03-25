import {Injectable} from '@angular/core';
import {SCHEMA_URL} from '../constants';

@Injectable()
export class LastStoreService {
  private lastStore: string;

  setStore(store) {
    this.lastStore = store;
  }

  getStoreUrl() {
    return this.lastStore ? `/store/catalog/${this.lastStore}` : SCHEMA_URL;
  }
}
