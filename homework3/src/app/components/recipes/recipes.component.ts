import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Recipe } from 'src/app/interface/recipe';
import { RecipeServiceService } from 'src/app/services/recipe-service.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss'],
})
export class RecipesComponent implements OnInit {
  recipes: Recipe[] = [];

  constructor(
    private recipeService: RecipeServiceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.recipeService
      .getRecipes()
      .subscribe((recipes) => (this.recipes = recipes));
  }

  onRecipeDetails(selectedRecipe: Recipe) {
    this.router.navigate(['recipes-details', selectedRecipe.id]);
  }
}
