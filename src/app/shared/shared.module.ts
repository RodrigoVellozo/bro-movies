import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { SearchComponent } from './ui/search/search.component';
import { NavbarComponent } from './ui/navbar/navbar.component';
import { ErrorMessageContentComponent } from './ui/error-message-content/error-message-content.component';

@NgModule({
  declarations: [SearchComponent, NavbarComponent, ErrorMessageContentComponent],
  imports: [
    CommonModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    ReactiveFormsModule
  ],
  exports: [SearchComponent, NavbarComponent, ErrorMessageContentComponent],
})
export class SharedModule {}
