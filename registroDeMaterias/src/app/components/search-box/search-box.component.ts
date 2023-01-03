import { Component, EventEmitter, Output } from '@angular/core';
import { ɵValue } from '@angular/forms';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss'],
})
export class SearchBoxComponent {
  @Output() searchValue = new EventEmitter();

  valueInput: string = '';

  search() {
    this.searchValue.emit(this.valueInput);
  }
}
