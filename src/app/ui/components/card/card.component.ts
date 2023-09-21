import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import {TooltipPosition, MatTooltipModule} from '@angular/material/tooltip';
import { Router, RouterModule } from '@angular/router';
import { Movie } from 'src/app/core/models/movie';
import { ConvertMinToHoursPipe } from '../../pipes/convert-min-to-hours.pipe';
import { EllipsisPipe } from '../../pipes/ellipsis.pipe';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    ConvertMinToHoursPipe,
    RouterModule,
    EllipsisPipe,
    MatChipsModule,
    MatCardModule,
    MatButtonModule,
    MatTooltipModule
  ],
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent {
  @Input() movie!: Movie;

  constructor(private _router: Router) {}

  openDetails(movieId: string) {
    this._router.navigate(['/movies', movieId]);
  }
}
