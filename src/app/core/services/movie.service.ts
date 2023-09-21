import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable, catchError, map, throwError } from 'rxjs';

import {
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { Movie } from '../models/movie';
import { MovieDetail } from '../models/movie-detail';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private readonly API_KEY = `24caa93e`;
  private readonly API_URL = `http://www.omdbapi.com/?apikey=${this.API_KEY}&`;

  horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';

  constructor(private _http: HttpClient, private _snackbar: MatSnackBar) {}

  public getMovies(search?: string): Observable<Array<Movie>> {
    if (!search) search = 'one piece';
    return this._http.get<Observable<Array<Movie>>>(`${this.API_URL}s=${search}`).pipe(
      map((res:any) => res.Search),
      catchError((err) => {
        this._snackbar.open('Falha ao carregar o recurso.', 'Fechar', {
          verticalPosition: this.verticalPosition,
          horizontalPosition: this.horizontalPosition,
        });
        return throwError(() => err);
      })
    );
  }

  public getMovie(imdbID: string):Observable<MovieDetail> {
    return this._http.get<Observable<MovieDetail>>(`${this.API_URL}i=${imdbID}`).pipe(
      map((res: any) => res),
      catchError((err) => {
        this._snackbar.open('Falha ao carregar o recurso.', 'Fechar', {
          verticalPosition: this.verticalPosition,
          horizontalPosition: this.horizontalPosition,
        });
        return throwError(() => err);
      })
    );
  }
}
