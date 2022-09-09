import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeopleListComponent } from './components/people-list/people-list.component';
import { PeopleDetailsComponent } from './components/people-details/people-details.component';

@NgModule({
  declarations: [PeopleListComponent, PeopleDetailsComponent],
  imports: [CommonModule],
})
export class PeopleModule {}
