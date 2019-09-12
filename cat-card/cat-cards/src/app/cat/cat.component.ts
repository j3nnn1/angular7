import {Component, Input, OnInit, ElementRef, ViewChild} from '@angular/core';
import { Cat } from './cat.model';
import { Subject } from 'rxjs';
import { CatService } from './cat.service';

@Component({
  selector: 'app-cat',
  templateUrl: './cat.component.html',
  styleUrls: ['./cat.component.css']
  // I will not add providers so cat services is global.. to chewin on it.. if is convenient global o local service
  // providers: [ "Service" ]
})
export class CatComponent implements OnInit {

  public cat: Cat;
  private catService: CatService;
  @ViewChild('countLikes', {static: true}) countLikes: ElementRef;

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

  constructor(catService: CatService) {
      this.catService = catService;
  }

  ngOnInit() {
    // add button fetch new cats fetch 5 cats and save pagination
    // generate random number to pick
    this.cat = this.cats[1];
    this.catService.getRandomCat();
    // this.catService.isAccesibleResource(this.cat);
    // this.catService.logInitCatService();
  }

  onPassingLocalReference(countLikes: ElementRef) {      // passing the entire HTML element like a string
      // onPassingLocalReference(countLikes: String) {   // passing the value
      console.log(countLikes);
      console.log(this.countLikes.nativeElement.value);  // accesing to the value with native Element option is MUST!!! adding ViewChild
      console.log(new ElementRef(countLikes));           // you need to do a instance to work with this
  }
}
