import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css'],
})
export class MovieListComponent implements OnInit {
  favouriteMovie: string = 'Valhalla the legend of Thor';
  @Input() movieListTitle: string;
  @Input() movieTitle: string;

  constructor() {}

  ngOnInit(): void {}

  onMovieDetailsReceived(value: string) {
    this.favouriteMovie = value;
  }
}
