import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from 'src/app/core/services/movie.service';


@Component({
  selector: 'app-movies-details',
  templateUrl: './movies-details.component.html',
  styleUrls: ['./movies-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MoviesDetailsComponent {

  public readonly movie$ = this._movieService.getMovie(this._activatedRoute.snapshot.params['imdbID']);
  
  constructor(private _movieService: MovieService, private _activatedRoute: ActivatedRoute ) {
    
  }
}
