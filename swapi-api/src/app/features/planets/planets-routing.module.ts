import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PlanetsListComponent } from './components/planets-list/planets-list.component';
import { PlanetsDetailsComponent } from './components/planets-details/planets-details.component';

const routes: Routes = [
  {
    path: '',
    component: PlanetsListComponent,
    title: 'Planets List',
  },
  {
    path: 'details/1',
    component: PlanetsDetailsComponent,
    title: 'Planet Details',
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, [RouterModule.forChild(routes)]],
  exports: [RouterModule],
})
export class PlanetsRoutingModule {}
