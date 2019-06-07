import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {

  recipes: Recipe[] = [
    // tslint:disable-next-line:max-line-length
    new Recipe('A test Recipe', 'this is a description', 'https://www.gettyimages.com/detail/photo/cheesy-pepperoni-pizza-royalty-free-image/938742222'),
  ];

  constructor() { }

  ngOnInit() {
  }

}
