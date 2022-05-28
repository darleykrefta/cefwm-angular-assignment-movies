import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, map } from 'rxjs/operators';

import database from '../database/data';

import { Genre } from '../models/genre';
import { Movie } from '../models/movie';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  constructor() {}

  public getByGenre(genre: string): Observable<Array<Movie>> {
    const filteredMovies = database.movies.filter((movie) =>
      movie.genres.includes(genre)
    );
    return of(filteredMovies).pipe(
      delay(300),
      map((arr) => {
        return arr.map((movie) => {
          return new Movie(
            movie.id,
            movie.title,
            movie.year,
            movie.genres.map((genre) => new Genre(genre)),
            movie.director,
            movie.actors,
            movie.plot,
            movie.posterUrl
          );
        });
      })
    );
  }
}
