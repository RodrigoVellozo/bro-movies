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
    NavbarComponent
  ],
  exports: [
    MoviesListComponent,
    MoviesDetailsComponent
  ]
})
export class MoviesModule { }
