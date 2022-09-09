import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PeopleListComponent } from './components/people-list/people-list.component';
import { PeopleDetailsComponent } from './components/people-details/people-details.component';

const routes: Routes = [
  {
    path: '',
    component: PeopleListComponent,
    title: 'People List',
  },
  {
    path: 'details/1',
    component: PeopleDetailsComponent,
    title: 'People Details',
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, [RouterModule.forChild(routes)]],
  exports: [RouterModule],
})
export class PeopleRoutingModule {}
