import { Injectable } from '@angular/core';
import { Cat } from './cat.model';
import {HttpClient, HttpHeaders, HttpClientModule} from '@angular/common/http';
import { CatInterface } from './cat.interface';
import {Observable, Subscription} from 'rxjs';


@Injectable()

// {
//  providedIn: 'root' // this is important because this denote
//  if will use the same instance in this case will use another instance diferent from root
// }

export class CatService {

  private defaultPictureUrl = '/assets/cat.jgp';
  private randomCatUrl      = 'https://api.thecatapi.com/v1/images/search';
  private error: any;
  private httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*',
        'x-api-key': 'DEMO-API-KEY'
      }),
    // observe: 'response'
  };

  public  isPictureUrlAccesible = false;
  public  randomCat: CatInterface;

  constructor(private http: HttpClient) {
  }

  logInitCatService() {
    console.log('desde la clase Cat Services');
  }

  /*
  * isAccesibleResource
  * check is a image url is available
  * return BOOLEAN true or false
  * */

  isAccesibleResource(cat: Cat) {
        console.log('isAccesibleResource');
        console.log(this.http.get(cat.pictureUrl, {observe: 'response'}).subscribe( response => {

          console.log('status');
          console.log(response.status);
          console.log('statusText');
          console.log(response.statusText);
        }));
        this.isPictureUrlAccesible = true;
  }

  /*
  * getCat
  * params: id Number
  * return a random cat model with Data
  * from https://api.thecatapi.com/v1/images/search
  * */

  getCat(catId: number) {
      // console.log(this.http.get(this.randomCatUrl, this.httpOptions).subscribe(
      //   (data: CatInterface) => this.randomCat = { ...data }, // success
      //   error => this.error = error                     // fail
      //   )
      // );


      // tslint:disable-next-line:max-line-length
      return { id: '2j0', pictureUrl: 'https://cdn2.thecatapi.com/images/2j0.jp', url: 'https://cdn2.thecatapi.com/images/2j0.jpg', width: 400, height: 266, name: ('Nombre del Gato:' + ' 2j0'), lastname: 'kkkk test', categorie: 2, categorieName: '2j0'};
  }

  /*
  * getRandomCat
  *
  * return a random cat model with Data
  * from https://api.thecatapi.com/v1/images/search
  * */

  getRandomCat() {
    console.log('desde getRandomCat en cat service');
    console.log(
    this.http.get(this.randomCatUrl, this.httpOptions).subscribe(
      (data: CatInterface) => this.randomCat = { ...data }, // success
      error => this.error = error                     // fail
    )
    );
    console.log(this.randomCat);
  }
}
