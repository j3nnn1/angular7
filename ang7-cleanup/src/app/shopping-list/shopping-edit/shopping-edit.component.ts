import {Component, ElementRef, OnInit, ViewChild, EventEmitter, Output} from '@angular/core';

import {IngredientModel} from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput', {}) nameInputRef: ElementRef;
  @ViewChild('amountInput', {}) amountInputRef: ElementRef;
  /*  ingredientsAdded = new EventEmitter<{name: string, amount: number}>(); */

  @Output() ingredientsAdded = new EventEmitter<IngredientModel>();

  constructor() { }

  ngOnInit() {
  }

  onAddItem() {
        // const intead let cos are constantes..
        const ingName = this.nameInputRef.nativeElement.value;
        const ingAmount = this.amountInputRef.nativeElement.value;
        const newIngredient = new IngredientModel(ingName, ingAmount);
        this.ingredientsAdded.emit(newIngredient);
  }
}
