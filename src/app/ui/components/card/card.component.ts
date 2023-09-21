import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { ConvertMinToHoursPipe } from '../../pipes/convert-min-to-hours.pipe';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';



@Component({
  standalone: true,
  imports: [
    CommonModule,
    ConvertMinToHoursPipe,
    MatCardModule,
    MatButtonModule,
    MatChipsModule
  ],
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent {
  @Input() movie!: any;

  public split(items: string) {
    const splittedItems = items.split(',').map(item => item.trim());
    return splittedItems;
  }

  public getRandomColor( ){

  }

}
