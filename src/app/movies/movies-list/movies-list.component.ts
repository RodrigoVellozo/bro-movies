import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BehaviorSubject, Observable, map, switchMap } from 'rxjs';
import { Movie } from 'src/app/core/models/movie';
import { MovieService } from 'src/app/core/services/movie.service';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MoviesListComponent {
  readonly search$ = new BehaviorSubject<string>('');
  
  readonly movies$ = this.search$.pipe(
    switchMap((event) => this.getMovies(event))
  );

  readonly titleNotFound$ = this.movies$.pipe(
    map((movies) => (movies ? '' : this.search$.value))
  );

  constructor(
    private _movieService: MovieService,
  ) {}

  search(search: string){
    this.search$.next(search);
  }
  
  private getMovies(event: string): Observable<Array<Movie>>{
    return this._movieService.getMovies(event);
  }
}
