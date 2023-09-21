import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CardComponent } from '../ui/components/card/card.component';
import { ErrorMessageContentComponent } from '../ui/components/error-message-content/error-message-content.component';
import { MoviesDetailsComponent } from './movies-details/movies-details.component';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { MoviesRoutingModule } from './movies-routing.module';
import { MoviesShellComponent } from './movies-shell/movies-shell.component';
import { SearchComponent } from '../ui/components/search/search.component';
import { NavbarComponent } from '../ui/components/navbar/navbar.component';
import { ConvertMinToHoursPipe } from '../ui/pipes/convert-min-to-hours.pipe';
import { SplitPipe } from '../ui/pipes/split.pipe';
import {MatChipsModule} from '@angular/material/chips';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import {MatDividerModule} from '@angular/material/divider';

@NgModule({
  declarations: [
    MoviesListComponent,
    MoviesDetailsComponent,
    MoviesShellComponent
  ],
  imports: [
    CommonModule,
    MoviesRoutingModule,
    ErrorMessageContentComponent,
    CardComponent,
    SearchComponent,
    NavbarComponent,
    MatChipsModule,
    ConvertMinToHoursPipe,
    SplitPipe,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatDividerModule
  ],
  exports: [
    MoviesListComponent,
    MoviesDetailsComponent
  ]
})
export class MoviesModule { }
