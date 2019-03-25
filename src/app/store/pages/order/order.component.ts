import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {PAYMENT_TYPE_CONTACTLESS, PAYMENT_TYPE_LINK} from '../../constants';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent {

  form: FormGroup;
  paymentTypeContactLess = PAYMENT_TYPE_CONTACTLESS;
  paymentTypeLink = PAYMENT_TYPE_LINK;

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      phone: ['', Validators.compose([Validators.required, Validators.pattern(/^\d{10}$/)])],
      paymentType: ['']
    });
  }

  setPaymentType(value) {
    this.form.controls.paymentType.setValue(value);
    this.submit();
  }

  submit() {
    console.log(this.form.value);
    if (this.form.valid) {
      console.log('submit');
    }
  }
}
