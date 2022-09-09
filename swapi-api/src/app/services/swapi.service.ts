import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { Router } from '@angular/router';

const SWAPI_PEOPLE_URL = 'https://swapi.dev/api/people';
const SWAPI_PLANETS_URL = 'https://swapi.dev/api/planets';

@Injectable({
  providedIn: 'root',
})
export class SwapiService {
  constructor(private http: HttpClient, private router: Router) {}

  //Fetching data
  fetchPeople(): Observable<[]> {
    return this.http.get(SWAPI_PEOPLE_URL).pipe(map((data) => data as []));
  }

  fetchPeopleById(peopleId: number): Observable<{}> {
    return this.http
      .get(`${SWAPI_PEOPLE_URL}/${peopleId}`)
      .pipe(map((data) => data as {}));
  }

  fetchPlanets(): Observable<[]> {
    return this.http.get(SWAPI_PLANETS_URL).pipe(map((data) => data as []));
  }

  fetchPlanetsById(planetId: number): Observable<{}> {
    return this.http
      .get(`${SWAPI_PLANETS_URL}/${planetId}`)
      .pipe(map((data) => data as {}));
  }

  //Showing and Selecting from the data
  peopleSubject = new BehaviorSubject<[]>([]);
  $peopleObs = this.peopleSubject.asObservable();

  selectedPeopleSubject = new BehaviorSubject<{}>({});
  $selectedPeopleObs = this.selectedPeopleSubject.asObservable();

  planetsSubject = new BehaviorSubject<[]>([]);
  $planetsObs = this.peopleSubject.asObservable();

  selectedPlanetsSubject = new BehaviorSubject<{}>({});
  $selectedPlanetsObs = this.selectedPeopleSubject.asObservable();

  getPeople() {
    this.fetchPeople().subscribe({
      next: (people: []) => this.peopleSubject.next(people),
      error: (error) => console.error(error),
    });
  }

  getPeopleById(peopleId: number) {
    this.fetchPeopleById(peopleId).subscribe({
      next: (people: {}) => this.selectedPeopleSubject.next(people),
      error: (error) => console.error(error),
    });
  }

  getPlanets() {
    this.fetchPlanets().subscribe({
      next: (planets: []) => this.planetsSubject.next(planets),
      error: (error) => console.error(error),
    });
  }

  getPlanetsById(planetId: number) {
    this.fetchPlanetsById(planetId).subscribe({
      next: (planet: {}) => this.selectedPlanetsSubject.next(planet),
      error: (error) => console.error(error),
    });
  }
}
