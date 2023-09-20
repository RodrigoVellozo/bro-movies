import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MovieService } from '../shared/services/movie.service';
import { Observable, of, switchMap } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {
  title = 'BrouVideos';

  public movies$!: Observable<any>;

  constructor(private _movieService: MovieService) {}

  ngOnInit(): void {
    this.movies$ = this._movieService.getMovies();
  }

  search(event: string) {
    this.movies$ = this._movieService.getMovies(event).pipe(
      switchMap((movies) => {
        return of(movies);
      })
    );
  }
}
