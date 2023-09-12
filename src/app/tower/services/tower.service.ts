import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, switchMap, throwError } from 'rxjs';

import { environment } from 'src/environments/environment';

import { Tower } from 'src/app/tower/types/tower.type';

@Injectable({
  providedIn: 'root',
})
export class TowerService {
  constructor(private http: HttpClient) {}

  reloader$ = new BehaviorSubject(null);

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `,
        error.error
      );
    }

    // Return an observable with a user-facing error message.
    return throwError(
      () => new Error('Something bad happened; please try again later.')
    );
  }

  public getTowers() {
    return this.reloader$.pipe(
      switchMap(() => this.http.get<Tower[]>(environment.towersApiUrl))
    );
  }

  public reload() {
    this.reloader$.next(null);
  }
}
