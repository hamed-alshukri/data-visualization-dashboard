import { Injectable } from '@angular/core';
import { Observable, AsyncSubject } from 'rxjs';

import { Tower } from 'src/app/tower/types/tower.type';

@Injectable()
export class SharedData {
  private readonly valueSubject: AsyncSubject<Tower[]> = new AsyncSubject<
    Tower[]
  >();

  init(value: Tower[]) {
    // console.log('SharedData init', value);
    this.valueSubject.next(value);
    this.valueSubject.complete();
  }

  get value(): Observable<Tower[]> {
    return this.valueSubject.asObservable();
  }
}
