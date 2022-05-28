import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, map } from 'rxjs/operators';

import database from '../database/data';

import { Genre } from '../models/genre';

@Injectable({
  providedIn: 'root',
})
export class GenreService {
  constructor() {}

  public get(): Observable<Array<Genre>> {
    return of(database.genres).pipe(
      delay(300),
      map((arr) => {
        return arr.map((genre) => {
          return new Genre(genre);
        });
      })
    );
  }
}
