import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'my-first-homework';
  public movieListTitleFromAppComponent = 'Movie List Title (Parent Component)';
  public movieTitleFromAppComponent = 'Movie Title (Child Component)';
}
