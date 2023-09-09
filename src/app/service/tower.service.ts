// angular service to fetch data from https://byanat.wiremockapi.cloud/api/v2/towers
//
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';

import { Tower } from '../types/tower.type';

@Injectable({
  providedIn: 'root',
})
export class TowerService {
  constructor(private http: HttpClient) {}

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

  getTowers(): Observable<Tower[]> {
    return this.http.get<Tower[]>(
      'https://x8ki-letl-twmt.n7.xano.io/api:jjKtx4O-/api/v2/towers'
      // 'https://byanat.wiremockapi.cloud/api/v2/towers'
    );
    // .pipe(catchError(this.handleError));
  }
}
