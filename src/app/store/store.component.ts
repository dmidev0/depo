import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Store} from './models/store.model';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit {

  store: Store;

  constructor(private activatedRoute: ActivatedRoute) {
    this.store = activatedRoute.snapshot.data.store;
  }

  ngOnInit() {
  }
}
