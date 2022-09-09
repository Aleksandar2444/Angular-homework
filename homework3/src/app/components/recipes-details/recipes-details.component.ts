import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Recipe } from 'src/app/interface/recipe';
import { RecipeServiceService } from 'src/app/services/recipe-service.service';

@Component({
  selector: 'app-recipes-details',
  templateUrl: './recipes-details.component.html',
  styleUrls: ['./recipes-details.component.scss'],
})
export class RecipesDetailsComponent implements OnInit {
  selectedRecipe: Recipe | undefined = {} as Recipe;
  recipeID: number;

  constructor(
    private recipeService: RecipeServiceService,
    private route: ActivatedRoute
  ) {
    this.recipeID = Number(this.route.snapshot.params['id']);
  }

  ngOnInit(): void {
    this.recipeService.getRecipeById(this.recipeID).subscribe((recipe) => {
      this.selectedRecipe = recipe;
    });
  }
}
