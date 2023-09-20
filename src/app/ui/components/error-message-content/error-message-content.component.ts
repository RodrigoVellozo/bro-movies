import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  standalone: true,
  imports: [],
  selector: 'app-error-message-content',
  templateUrl: './error-message-content.component.html',
  styleUrls: ['./error-message-content.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ErrorMessageContentComponent {
  @Input() title!: string;
} 
