import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {PAYMENT_TYPE_CONTACTLESS, PAYMENT_TYPE_LINK} from '../../constants';
import {Order} from '../../models/order.model';
import {OrderRepository} from '../../repositories/order.repository';
import {Router} from '@angular/router';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent {

  form: FormGroup;
  paymentTypeContactLess = PAYMENT_TYPE_CONTACTLESS;
  paymentTypeLink = PAYMENT_TYPE_LINK;

  constructor(fb: FormBuilder,
              private orderRepository: OrderRepository,
              private order: Order,
              private router: Router) {
    this.form = fb.group({
      phone: ['', Validators.compose([Validators.required, Validators.pattern(/^\d{10}$/)])],
      paymentType: ['']
    });
  }

  async setPaymentType(value) {
    this.form.controls.paymentType.setValue(value);
    await this.submit();
  }

  async submit() {
    if (this.form.valid) {
      this.order.phone = this.form.value.phone;
      this.order.paymentType = this.form.value.paymentType;
      const order = await this.orderRepository.saveOrder(this.order);
      const orderId = order.id;
      this.order.clear();
      this.router.navigateByUrl(`/store/success/${orderId}`);
    }
  }
}
