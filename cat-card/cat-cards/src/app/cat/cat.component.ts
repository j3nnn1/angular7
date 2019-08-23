import {Component, Input, OnInit} from '@angular/core';
import { Cat } from './cat.model';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-cat',
  templateUrl: './cat.component.html',
  styleUrls: ['./cat.component.css']
})
export class CatComponent implements OnInit {

  public cat: Cat;
  public cats: Cat[] = [
    {
      "id": '0',
      "pictureUrl": "https://cdn2.thecatapi.com/images/28f.jpg",
      "height": 23,
      'width': 30,
      "categorieName": "Wichy Del Valle",
      "categorie": 1,
      "name": "Wichy Del Valle"
    },
    {
      "id": '1',
      "pictureUrl": "https://cdn2.thecatapi.com/images/28f.jpg",
      "height": 23,
      'width': 30,
      "name": "Anastasia monmatre",
      "categorieName": "Wichy Del Valle",
      "categorie": 2,
    },
    {
      "id": '2',
      "pictureUrl": "https://cdn2.thecatapi.com/images/28f.jpg",
      "height": 23,
      'width':30,
      "name": "Federica Isabela",
      "categorieName": "Wichy Del Valle",
      "categorie": 3,
    }
  ];

  public index = 0;
  @Input()
  parentSubject: Subject<any>;
  animationState: string;

  constructor() {

  }

  ngOnInit() {
    // this.parentSubject.subscribe(event => {
    //  this.startAnimation(event);
    // });
  }

  startAnimation(state) {
    if (!this.animationState) {
      this.animationState = state;
    }
  }

  resetAnimationState(state) {
    this.animationState = '';
    this.index++;
  }
}
