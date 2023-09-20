import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { catchError, map, throwError } from 'rxjs';

import {
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private readonly API_KEY = `24caa93e`;
  private readonly API_URL = `http://www.omdbapi.com/?apikey=${this.API_KEY}&`;

  horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';

  constructor(private _http: HttpClient, private _snackbar: MatSnackBar) {}

  public getMovies(search?: string) {
    if (!search) search = "batman";
    return this._http.get<any>(`${this.API_URL}s=${search}`).pipe(
      map((res) => {
        return res.Search
      }),
      catchError((err) => {
        this._snackbar.open(
          'Falha ao carregar o recurso.',
          'Fechar',
          {
            verticalPosition: this.verticalPosition,
            horizontalPosition: this.horizontalPosition,
          }
        );
        return throwError(() => err);
      })
    );
  }
}
