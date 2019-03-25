import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.scss']
})
export class SuccessComponent {

  orderId: number;

  constructor(private activatedRoute: ActivatedRoute) {
    this.orderId = activatedRoute.snapshot.params.id;
  }
}
