import {AfterViewInit, Component, ElementRef, EventEmitter, Output, ViewChild} from '@angular/core';
import {fromEvent} from 'rxjs';
import {debounceTime} from 'rxjs/operators';

@Component({
  selector: 'app-search-string',
  templateUrl: './search-string.component.html',
  styleUrls: ['./search-string.component.scss']
})
export class SearchStringComponent implements AfterViewInit {

  @Output()
  changed = new EventEmitter<string>();

  @ViewChild('input')
  input: ElementRef;

  ngAfterViewInit(): void {
    fromEvent(this.input.nativeElement, 'keyup').pipe(
      debounceTime(500),
    ).subscribe(() => this.changed.emit(this.input.nativeElement.value));
  }
}
