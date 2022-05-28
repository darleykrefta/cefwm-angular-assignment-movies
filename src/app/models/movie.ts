import { Genre } from './genre';

export class Movie {
  constructor(
    public id: number,
    public title: string,
    public year: string,
    public genres: Array<Genre>,
    public director: string,
    public actors: string,
    public plot: string,
    public posterUrl: string
  ) {}
}
