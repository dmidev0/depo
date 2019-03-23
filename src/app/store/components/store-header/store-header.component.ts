import {Component, Input, OnInit} from '@angular/core';
import {SCHEMA_URL} from '../../constants';

@Component({
  selector: 'app-store-header',
  templateUrl: './store-header.component.html',
  styleUrls: ['./store-header.component.scss']
})
export class StoreHeaderComponent implements OnInit {
  schemaUrl = SCHEMA_URL;

  @Input()
  title: string;

  @Input()
  extra: string;

  constructor() {
  }

  ngOnInit() {
  }

}
