import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlanetsListComponent } from './components/planets-list/planets-list.component';
import { PlanetsDetailsComponent } from './components/planets-details/planets-details.component';



@NgModule({
  declarations: [
    PlanetsListComponent,
    PlanetsDetailsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PlanetsModule { }
