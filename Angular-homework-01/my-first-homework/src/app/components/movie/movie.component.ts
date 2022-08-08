import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MovieDetails } from '../../helpers/movie-details';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'],
})
export class MovieComponent implements OnInit {
  constructor() {}
  @Input() movieTitleFromMovieListFromApp: string;

  @Output() movieDetailsToSendToParent: EventEmitter<string> =
    new EventEmitter<string>();

  public movie: MovieDetails = {
    name: 'Gods of Egypt',
    releaseDate: 'February 25, 2016',
    producerName: 'Alex Proyas',
    genre: 'Action/Adventure/Fantasy',
    rating: 5.4,
  };

  returnMovieInfo(movie: MovieDetails): string {
    const { name, releaseDate, producerName, genre, rating } = movie;
    return `Movie name: ${name}, release date: ${releaseDate}, producer: ${producerName}, genre: ${genre}, rating: ${rating}`;
  }

  sendMovieDetails() {
    this.movieDetailsToSendToParent.emit(this.returnMovieInfo(this.movie));
  }

  ngOnInit(): void {}
}
