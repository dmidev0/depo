import {Component, Input, OnInit} from '@angular/core';
import {SCHEMA_URL} from '../../constants';
import {Router} from '@angular/router';

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

  @Input()
  backUrl: string;

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  goBack(e) {
    e.preventDefault();
    if (this.backUrl) {
      this.router.navigateByUrl(this.backUrl);
      return;
    }
  }
}
