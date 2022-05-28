import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Genre } from './models/genre';
import { Movie } from './models/movie';
import { GenreService } from './services/genre.service';
import { MovieService } from './services/movie.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public genres$: Observable<Array<Genre>> = this.genreService.get();
  public genreSelected = 'Comedy';
  public movies: Movie[] = [];

  constructor(
    private genreService: GenreService,
    private movieService: MovieService
  ) {}

  handleGenreSelection(genreSelected: string): void {
    this.genreSelected = genreSelected;
    this.movieService.getByGenre(this.genreSelected).subscribe((newMovies) => {
      this.movies = newMovies;
    });
  }
}
