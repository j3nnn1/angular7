import {Component, Injectable, OnInit} from '@angular/core';
import {CatService} from '../cat/cat.service';

@Component({
  selector: 'app-cat-controls',
  templateUrl: './cat-controls.component.html',
  styleUrls: ['./cat-controls.component.css']
})

@Injectable()

export class CatControlsComponent implements OnInit {


  constructor(private catService: CatService) { }

  ngOnInit() {

  }
  onFetchNewRandomCat() {
      console.log('fetching new data in cat-controls components.');
      this.catService.getRandomCat().subscribe(
        (data) => {
          const randomCat = data.shift();
          this.catService.cat. id         = randomCat.id;
          this.catService.cat.pictureUrl = randomCat.url;
          this.catService.cat.height     = randomCat.height;
          this.catService.cat.width      = randomCat.width;
        }
      );
  }
}
