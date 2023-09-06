// angular service to fetch data from https://byanat.wiremockapi.cloud/api/v2/towers
//
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Tower } from '../types/tower.type';

@Injectable({
  providedIn: 'root',
})
export class TowerService {
  constructor(private http: HttpClient) {}

  getTowers(): Observable<Tower[]> {
    return this.http.get<Tower[]>(
      'https://byanat.wiremockapi.cloud/api/v2/towers'
    );
  }
}
