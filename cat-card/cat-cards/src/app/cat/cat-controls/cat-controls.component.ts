import {Component, Injectable, Input, OnInit} from '@angular/core';
import {CatService} from '../cat.service';

@Component({
  selector: 'app-cat-controls',
  templateUrl: './cat-controls.component.html',
  styleUrls: ['./cat-controls.component.css']
})

@Injectable()

export class CatControlsComponent implements OnInit {

  @Input() catVotingId: string;

  constructor(private catService: CatService) { }

  ngOnInit() {

  }
  onFetchNewRandomCat() {
      console.log('fetching new data in cat-controls components.');
      this.catService.getRandomCat().subscribe(
        (data) => {
          const randomCat = data.shift();
          this.catService.cat.id         = randomCat.id;
          this.catService.cat.pictureUrl = randomCat.url;
          this.catService.cat.height     = randomCat.height;
          this.catService.cat.width      = randomCat.width;
        }
      );
  }
  isLike() {
    console.log('is like cat ', this.catVotingId);
    this.catService.votingEmmiter.next(true);

  }
  dislike() {
    console.log('dislike', this.catVotingId);
    this.catService.votingEmmiter.next(true);
  }
}
