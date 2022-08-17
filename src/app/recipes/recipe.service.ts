import { EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';

export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(
      'Test Recipe 1',
      'This is simply a test',
      'https://source.unsplash.com/random/300×300?pizza'
    ),
    new Recipe(
      'Test Recipe 2',
      'This is simply a test',
      'https://source.unsplash.com/random/300×300?pizza'
    ),
  ];

  recipeSelected = new EventEmitter<Recipe>();
  //   constructor() {}
  getRecipes() {
    return this.recipes.slice();
  }
}
