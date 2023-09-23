import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { MovieDetail } from 'src/app/core/models/movie-detail';
import { MovieService } from 'src/app/core/services/movie.service';


@Component({
  selector: 'app-movies-details',
  templateUrl: './movies-details.component.html',
  styleUrls: ['./movies-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MoviesDetailsComponent {
  readonly columns = ['source', 'value'];

  readonly movie$: Observable<MovieDetail> = this._movieService.getMovie(this._activatedRoute.snapshot.params['imdbID']);
  
  constructor(private _movieService: MovieService, private _activatedRoute: ActivatedRoute ) {  }

  getRandomColor(source: string): string {
    return `#${Math.floor(Math.random() * 10000000).toString(16)}`;
  }
}
