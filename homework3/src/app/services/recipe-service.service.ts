import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, ObservedValueOf, of } from 'rxjs';
import { Recipe } from '../interface/recipe';

@Injectable({
  providedIn: 'root',
})
export class RecipeServiceService {
  recipesBehaveourSubject = new BehaviorSubject<Recipe[]>([]);
  $recipeObservable = this.recipesBehaveourSubject.asObservable();

  constructor() {}

  addRecipe(recipe: Recipe) {
    const storedRecipes = this.recipesBehaveourSubject.getValue();

    const recipeToBeAdded: Recipe = {
      id: storedRecipes.length + 1,
      ...recipe,
    };

    this.recipesBehaveourSubject.next([...storedRecipes, recipeToBeAdded]);

    console.log(
      'Recipes after added:',
      this.recipesBehaveourSubject.getValue()
    );
  }

  getRecipes() {
    console.log('Get recipe', this.$recipeObservable);
    return this.$recipeObservable;
  }

  getRecipeById(recipeId: number) {
    console.log('Get recipe by id', this.$recipeObservable);
    const storedRecipes = this.recipesBehaveourSubject.getValue();
    const recipeById = storedRecipes.find(
      (RECIPEid) => RECIPEid.id === recipeId
    );

    return of(recipeById);
  }
}
