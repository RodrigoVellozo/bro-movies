import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  public searchForm = new FormControl();

  initialString: string ='';
  @Output() searchEvent = new EventEmitter<string>();

  constructor(private _fb: FormBuilder) {}

  ngOnInit(): void {
    this.searchForm.setValue(this.initialString);
    this.listenToSearch();
  }

  private emitSearchEvent(search: string): void {
    this.searchEvent.emit(search);
  }

  private listenToSearch(): void {
    this.searchForm.valueChanges
      .pipe(debounceTime(600), distinctUntilChanged())
      .subscribe({
        next: (search) => {
          this.emitSearchEvent(search);
        },
      });
  }
}
