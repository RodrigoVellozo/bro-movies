import { ChangeDetectionStrategy, Component, DestroyRef, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { debounceTime, distinctUntilChanged } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  standalone: true,
  imports: [
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatIconModule
  ],
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchComponent implements OnInit {
  readonly searchForm = new FormControl();

  initialString: string ='';
  @Output() searchEvent = new EventEmitter<string>();

  constructor(private readonly _fb: FormBuilder, private readonly _destroyRef: DestroyRef) {}

  ngOnInit(): void {
    this.searchForm.setValue(this.initialString);
    this.listenToSearch();
  }

  private emitSearchEvent(search: string): void {
    this.searchEvent.emit(search);
  }

  private listenToSearch(): void {
    this.searchForm.valueChanges
      .pipe(
        debounceTime(600), 
        distinctUntilChanged(),
        takeUntilDestroyed(this._destroyRef)
      )
      .subscribe({
        next: (search) => {
          this.emitSearchEvent(search);
        },
      });
  }
}
