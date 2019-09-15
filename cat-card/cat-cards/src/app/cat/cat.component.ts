import {Component, Input, OnInit, ElementRef, ViewChild} from '@angular/core';
import { Cat } from './cat.model';
import { Subject } from 'rxjs';
import { CatService } from './cat.service';


export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

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

  public index = 0;
  @Input()
  parentSubject: Subject<any>;
  animationState: string;

  tiles: Tile[] = [
    {text: 'Random Cat', cols: 3, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 1, color: 'lightgreen'},
    // {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    // {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
  ];

  constructor(catService: CatService) {
      this.catService = catService;
  }

  ngOnInit() {
    this.cat = this.catService.getCat(); // get template o Model Cat
    this.fetchNewRandomCat();            // get new cat and fill atributes in Cat Model
  }

  onPassingLocalReference(countLikes: ElementRef) {      // passing the entire HTML element like a string
      // onPassingLocalReference(countLikes: String) {   // passing the value
      console.log('BEGIN onPassingLocalReference');
      console.log(countLikes);
      console.log(this.countLikes.nativeElement.value);  // accesing to the value with native Element option is MUST!!! adding ViewChild
      console.log(new ElementRef(countLikes));           // you need to do a instance to work with this
      console.log('END onPassingLocalReference');
  }

  fetchNewRandomCat() {
      this.catService.getRandomCat().subscribe(
        (data) => {
          const randomCat = data.shift();
          this.cat.id         = randomCat.id;
          this.cat.pictureUrl = randomCat.url;
          this.cat.height     = randomCat.height;
          this.cat.width      = randomCat.width;
          this.tiles[1].text  = (this.cat.categorie.toString());
        }
      );
  }
}
