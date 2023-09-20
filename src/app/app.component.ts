import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable, of, switchMap } from 'rxjs';
import { MovieService } from './service/movie.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  title = 'BrouVideos';

  public movies$!: Observable<any>;

  constructor(private _movieService: MovieService) {}

  ngOnInit(): void {
    this.movies$ = this._movieService.getMovies();
  }

  search(event: string) {
    this.movies$ = this._movieService.getMovies(event).pipe(
      switchMap((movies) => {
        console.log("movies: ", movies)
        return of(movies);
      })
    );
  }
}
