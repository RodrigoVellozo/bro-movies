import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { MoviesDetailsComponent } from './movies-details/movies-details.component';
import { MoviesShellComponent } from './movies-shell/movies-shell.component';

const routes: Routes = [
  {
    path: '',
    component: MoviesShellComponent,
    children: [
      {
        path: '',
        component: MoviesListComponent,
      },
      {
        path: ':imdbID',
        component: MoviesDetailsComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MoviesRoutingModule {}
