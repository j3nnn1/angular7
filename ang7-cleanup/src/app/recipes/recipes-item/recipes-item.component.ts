import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
/* /home/j3nnn1/git/angular7/ang7-cleanup/src/app/recipes/recipe.model.ts
/home/j3nnn1/git/angular7/ang7-cleanup/src/app/recipes/recipes-item/recipes-item.component.ts */

@Component({
  selector: 'app-recipes-item',
  templateUrl: './recipes-item.component.html',
  styleUrls: ['./recipes-item.component.css']
})
export class RecipesItemComponent implements OnInit {
  /* add data from outside add decorator INPUT*/
  /* this refer from recipes-lists.html watch for recipeEl*/
  // passing data from list to item from one component to another with property binding
  // this is the receiver
  @Input() recipe: Recipe;
  constructor() { }

  ngOnInit() {
  }

}
