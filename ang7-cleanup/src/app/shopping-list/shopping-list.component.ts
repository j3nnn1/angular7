import { Component, OnInit } from '@angular/core';
import { IngredientModel} from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients: IngredientModel[] = [
    new IngredientModel( 'apples', 6),
    new IngredientModel( 'tomatoes', 3),
  ];
  constructor() { }

  ngOnInit() {
  }

  onIngredientsAdded(ingredients: IngredientModel) {
       this.ingredients.push(ingredients);
  }
}
