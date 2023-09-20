import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesRoutingModule } from './movies-routing.module';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { MoviesDetailsComponent } from './movies-details/movies-details.component';


@NgModule({
  declarations: [
    MoviesListComponent,
    MoviesDetailsComponent
  ],
  imports: [
    CommonModule,
    MoviesRoutingModule
  ],
  exports: [
    MoviesListComponent,
    MoviesDetailsComponent
  ]
})
export class MoviesModule { }
