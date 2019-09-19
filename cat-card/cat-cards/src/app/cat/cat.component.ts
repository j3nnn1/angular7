import {Component, Input, OnInit, ElementRef, ViewChild, OnDestroy} from '@angular/core';
import { Cat } from './cat.model';
import {Subject, Subscription, Observable} from 'rxjs';
import { CatService } from './cat.service';
import { interval } from 'rxjs';

@Component({
  selector: 'app-cat',
  templateUrl: './cat.component.html',
  styleUrls: ['./cat.component.css']
  // I will not add providers so cat services is global.. to chewin on it.. if is convenient global o local service
  // providers: [ "Service" ]
})
export class CatComponent implements OnInit, OnDestroy {

  private firstObsSubscription: Subscription;
  public cat: Cat;       // passing to child component
  public catId: string;
  private catVoting = false;

  @ViewChild('countLikes', {static: true}) countLikes: ElementRef;

  public index = 0;

  constructor(private catService: CatService) {
      this.catService = catService;
  }

  ngOnInit() {
    this.catService.votingEmmiter.subscribe(didVote => {
      this.catVoting = didVote;
    });

    // const customObs = new Observable((observer) => {
    //   let count = 0;
    //   console.log('desde el observable');
    //   console.log(count);
    //   setInterval(() => {
    //     observer.next(count);
    //     count++;
    //     // console.log('desde el observable');
    //     // console.log(count);
    //     if (count == 2) {
    //       observer.complete();
    //     }
    //     if (count > 3) {
    //       observer.error(new Error('Error en el observable'));
    //     }
    //   }, 1000);
    // });
    //
    // this.firstObsSubscription = customObs.subscribe(data => {
    //   console.log('desde el listening new data');
    //   console.log(data);
    // },
    //   error => {
    //   console.log('ERROR: at observable');
    //   }, () => {
    //   console.log('Observable is completed!');
    //   });
    // this.firstObsSubscription = interval(1000).subscribe(count => {
    //   console.log(count);
    // });
    this.cat = this.catService.getCat(); // get template o Model Cat
    this.fetchNewRandomCat();            // get new cat and fill atributes in Cat Model
  }
  ngOnDestroy(): void {
    this.firstObsSubscription.unsubscribe();
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
          this.cat.id = randomCat.id;
          this.cat.pictureUrl = randomCat.url;
          this.cat.width = randomCat.width;
          this.cat.height = randomCat.height;
          this.catVoting = false;
        }
      );
  }
}
