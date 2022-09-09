import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../components/home/home.component';
import { AddRecipeComponent } from '../components/add-recipe/add-recipe.component';
import { RecipesComponent } from '../components/recipes/recipes.component';
import { RecipesDetailsComponent } from '../components/recipes-details/recipes-details.component';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from '../components/not-found/not-found.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'add-recipe',
    component: AddRecipeComponent,
  },
  {
    path: 'recipes',
    component: RecipesComponent,
  },
  {
    path: 'recipes-details/:id',
    component: RecipesDetailsComponent,
  },
  {
    path: 'not-found',
    component: NotFoundComponent,
  },
  {
    path: '**',
    redirectTo: 'not-found',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
