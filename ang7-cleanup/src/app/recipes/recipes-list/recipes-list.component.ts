import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    // tslint:disable-next-line:max-line-length
    new Recipe('A test Recipe', 'this is a description', 'https://media.gettyimages.com/photos/pizza-picture-id153444470?s=2048x2048'),
    new Recipe('A test Recipe', 'this is a description', 'https://media.gettyimages.com/photos/pizza-picture-id153444470?s=2048x2048'),
  ];

  constructor() { }

  ngOnInit() {
  }
  // this is a custom event
  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

}
