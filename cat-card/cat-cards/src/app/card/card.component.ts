import { Component, OnInit, Input } from '@angular/core';
import { trigger, keyframes, animate, transition } from '@angular/animations';
import * as kf from './keyframes';
import { User } from './user';
import { Subject } from 'rxjs';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  animations: [
    trigger('cardAnimator', [
      transition('* => swiperight', animate(750, keyframes(kf.swiperight))),
      transition('* => swipeleft', animate(750, keyframes(kf.swipeleft)))
    ])
  ]

})
export class CardComponent implements OnInit {

  public users: User[] = [
    {
      "id": 0,
      "picture": "https://placehold.it/350x349",
      "age": 23,
      "name": "Wichy Del Valle",
      "gender": "female"
    },
    {
      "id": 1,
      "picture": "https://placehold.it/350x349",
      "age": 40,
      "name": "Anastasia monmatre",
      "gender": "female"
    },
    {
      "id": 2,
      "picture": "https://cdn2.thecatapi.com/images/28f.jpg",
      "age": 35,
      "name": "Federica Isabela",
      "gender": "female"
    },
    {
      "id": 3,
      "picture": "https://placehold.it/350x349",
      "age": 30,
      "name": "Ona de Coromoto",
      "gender": "male"
    },
    {
      "id": 4,
      "picture": "https://placehold.it/350x349",
      "age": 37,
      "name": "Otto mano",
      "gender": "female"
    },
    {
      "id": 5,
      "picture": "https://placehold.it/350x349",
      "age": 21,
      "name": "Richardson Tillman",
      "gender": "male"
    },
    {
      "id": 6,
      "picture": "https://placehold.it/350x349",
      "age": 25,
      "name": "Burton Wynn",
      "gender": "male"
    },
    {
      "id": 7,
      "picture": "https://placehold.it/350x349",
      "age": 21,
      "name": "Eileen Higgins",
      "gender": "female"
    },
    {
      "id": 8,
      "picture": "https://placehold.it/350x349",
      "age": 31,
      "name": "Angeline Gill",
      "gender": "female"
    },
    {
      "id": 9,
      "picture": "https://placehold.it/350x349",
      "age": 37,
      "name": "Dejesus Mcintyre",
      "gender": "male"
    },
    {
      "id": 10,
      "picture": "https://placehold.it/350x349",
      "age": 34,
      "name": "Peters Ruiz",
      "gender": "male"
    },
    {
      "id": 11,
      "picture": "https://placehold.it/350x349",
      "age": 37,
      "name": "Beverley May",
      "gender": "female"
    },
    {
      "id": 12,
      "picture": "https://placehold.it/350x349",
      "age": 27,
      "name": "Manuela Drake",
      "gender": "female"
    },
    {
      "id": 13,
      "picture": "https://placehold.it/350x349",
      "age": 23,
      "name": "Trujillo Daniels",
      "gender": "male"
    },
    {
      "id": 14,
      "picture": "https://placehold.it/350x349",
      "age": 31,
      "name": "Nichole Holder",
      "gender": "female"
    },
    {
      "id": 15,
      "picture": "https://placehold.it/350x349",
      "age": 28,
      "name": "Vasquez Cochran",
      "gender": "male"
    },
    {
      "id": 16,
      "picture": "https://placehold.it/350x349",
      "age": 22,
      "name": "Pitts Doyle",
      "gender": "male"
    },
    {
      "id": 17,
      "picture": "https://placehold.it/350x349",
      "age": 30,
      "name": "Emerson Williamson",
      "gender": "male"
    },
    {
      "id": 18,
      "picture": "https://placehold.it/350x349",
      "age": 33,
      "name": "Conner Bell",
      "gender": "male"
    },
    {
      "id": 19,
      "picture": "https://placehold.it/350x349",
      "age": 21,
      "name": "Janie Stokes",
      "gender": "female"
    },
    {
      "id": 20,
      "picture": "https://placehold.it/350x349",
      "age": 33,
      "name": "Ingrid Whitney",
      "gender": "female"
    },
    {
      "id": 21,
      "picture": "https://placehold.it/350x349",
      "age": 24,
      "name": "Janis Rowe",
      "gender": "female"
    },
    {
      "id": 22,
      "picture": "https://placehold.it/350x349",
      "age": 34,
      "name": "Campos Cooke",
      "gender": "male"
    },
    {
      "id": 23,
      "picture": "https://placehold.it/350x349",
      "age": 39,
      "name": "Bentley Foley",
      "gender": "male"
    },
    {
      "id": 24,
      "picture": "https://placehold.it/350x349",
      "age": 31,
      "name": "Frieda Knapp",
      "gender": "female"
    },
    {
      "id": 25,
      "picture": "https://placehold.it/350x349",
      "age": 39,
      "name": "Blackburn Kirk",
      "gender": "male"
    },
    {
      "id": 26,
      "picture": "https://placehold.it/350x349",
      "age": 26,
      "name": "Love Mathis",
      "gender": "male"
    },
    {
      "id": 27,
      "picture": "https://placehold.it/350x349",
      "age": 40,
      "name": "Meagan Knight",
      "gender": "female"
    },
    {
      "id": 28,
      "picture": "https://placehold.it/350x349",
      "age": 34,
      "name": "Robertson Whitley",
      "gender": "male"
    },
    {
      "id": 29,
      "picture": "https://placehold.it/350x349",
      "age": 37,
      "name": "Haney Dickerson",
      "gender": "male"
    },
    {
      "id": 30,
      "picture": "https://placehold.it/350x349",
      "age": 28,
      "name": "Benton Walton",
      "gender": "male"
    },
    {
      "id": 31,
      "picture": "https://placehold.it/350x349",
      "age": 27,
      "name": "Mindy Obrien",
      "gender": "female"
    },
    {
      "id": 32,
      "picture": "https://placehold.it/350x349",
      "age": 37,
      "name": "Ramona Wilcox",
      "gender": "female"
    },
    {
      "id": 33,
      "picture": "https://placehold.it/350x349",
      "age": 38,
      "name": "Diann Chaney",
      "gender": "female"
    },
    {
      "id": 34,
      "picture": "https://placehold.it/350x349",
      "age": 23,
      "name": "Rodgers Delgado",
      "gender": "male"
    }
  ];

  public index = 0;
  @Input()
  parentSubject: Subject<any>;



  animationState: string;
  constructor() { }

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
