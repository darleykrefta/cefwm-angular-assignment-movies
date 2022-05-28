import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie';

@Component({
  selector: 'card-movie-component',
  templateUrl: './card-movie.component.html',
  styleUrls: ['./card-movie.component.css'],
})
export class CardMovieComponent implements OnInit {
  @Input()
  public movie?: Movie;

  public collapseDescription = false;

  constructor() {}

  ngOnInit(): void {}

  handleCollapseDescription() {
    this.collapseDescription = !this.collapseDescription;
  }
}
