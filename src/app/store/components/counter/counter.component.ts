import {Component, EventEmitter, Input, Output} from '@angular/core';
import {MAX_COUNTER_COUNT} from '../../constants';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent {

  @Input()
  min = 1;

  @Input()
  max = MAX_COUNTER_COUNT;

  @Input()
  value: number;

  @Output()
  changed = new EventEmitter<number>();

  constructor() {
  }

  inc() {
    if (this.value < this.max) {
      this.value++;
      this.updateValue();
    }
  }

  dec() {
    if (this.value > this.min) {
      this.value--;
      this.updateValue();
    }
  }

  private updateValue() {
    this.changed.emit(this.value);
  }
}

