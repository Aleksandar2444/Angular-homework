import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Recipe } from 'src/app/interface/recipe';
import { RecipeServiceService } from 'src/app/services/recipe-service.service';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.scss'],
})
export class AddRecipeComponent implements OnInit {
  recipeForm: FormGroup;

  constructor(private recipeService: RecipeServiceService) {}

  ngOnInit(): void {
    this.initForm();
  }

  onFormSubmit() {
    console.log(this.recipeForm.value);
    const formDetails = this.recipeForm.value;

    const recipeOfFormDetails: Recipe = {
      name: formDetails.name,
      description: formDetails.description,
      ingredients: formDetails.ingredients.split(' '),
    };

    console.log('Recipe to be saved', recipeOfFormDetails);

    this.recipeService.addRecipe(recipeOfFormDetails);

    this.recipeForm.reset();
  }

  initForm() {
    this.recipeForm = new FormGroup({
      name: new FormControl('', Validators.required),
      description: new FormControl('', [
        Validators.required,
        Validators.max(16),
      ]),
      ingredients: new FormControl('', Validators.required),
    });
  }
}
