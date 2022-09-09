import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'people',
    loadChildren: () =>
      import('./features/people/people.module').then(
        (module) => module.PeopleModule
      ),
  },
  {
    path: 'planets',
    loadChildren: () =>
      import('./features/planets/planets.module').then(
        (module) => module.PlanetsModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
