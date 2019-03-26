import {Injectable} from '@angular/core';
import {Product} from './product.model';
import {Subject} from 'rxjs';
import {CartRepositoring} from '../repositories/cart.repositoring';

@Injectable()
export class Cart {
  public itemCount = 0;
  public cartPrice = 0;
  private lines: CartLine[] = [];
  private isRecalculate = new Subject<null>();

  constructor(private repository: CartRepositoring) {
    this.repository.get().then(lines => {
      this.lines = lines;
      this.recalculate();
    });
  }

  addLine(product: Product, quantity: number = 1) {
    const line = this.lines.find(l => l.product.id === product.id);
    if (line) {
      line.quantity += quantity;
    } else {
      this.lines.push(new CartLine(product, quantity));
    }
    this.recalculate();
  }

  updateQuantity(product: Product, quantity: number) {
    const line = this.lines.find(l => l.product.id === product.id);
    if (line) {
      line.quantity = Number(quantity);
    }
    this.recalculate();
  }

  removeLine(id: string) {
    const index = this.lines.findIndex(l => l.product.id === id);
    this.lines.splice(index, 1);
    this.recalculate();
  }

  clear() {
    this.lines = [];
    this.itemCount = 0;
    this.cartPrice = 0;
  }

  recalculateEvent() {
    return this.isRecalculate.asObservable();
  }

  getLines(): CartLine[] {
    return this.lines;
  }

  getInfo() {
    return {
      count: this.itemCount,
      price: this.cartPrice,
      lines: this.lines,
    };
  }

  private recalculate() {
    this.itemCount = 0;
    this.cartPrice = 0;
    this.isRecalculate.next();
    this.lines.forEach(l => {
      this.itemCount += l.quantity;
      this.cartPrice += l.lineTotal;
    });
    this.repository.set(this.lines);
  }
}

export class CartLine {
  constructor(public product: Product, public quantity: number) {
  }

  get lineTotal() {
    return this.quantity * this.product.price;
  }
}
