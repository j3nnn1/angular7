import { Injectable } from '@angular/core';
import { Cat } from './cat.model';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { CatInterface } from './interfaces/cat.interface';
import { Voting } from './interfaces/voting.interface';
import { Subject } from 'rxjs';

@Injectable({providedIn: 'root'})
// {
//  providedIn: 'root' // this is important because this denote
//  if will use the same instance in this case will use another instance diferent from root
// }
export class CatService {


  private randomCatUrl      = 'https://api.thecatapi.com/v1/images/search';
  private votingCatUrl      = 'https://api.thecatapi.com/v1/votes';
  private userVote: Voting;

  private httpOptions = {
      headers: new HttpHeaders({'x-api-key': 'DEMO-API-KEY', 'Access-Control-Allow-Origin': '*' }),
    // observe: 'response' ??
  };

  public isPictureUrlAccesible = false;
  public cat: Cat;
  public cats: Cat[] = [
    {
      id: 'Loading Cat',
      pictureUrl: '/assets/cat.jpg',
      height: 23,
      width: 30,
      categorieName: 'Loading Cat',
      categorie: 1,
      name: 'Loading Cat'
    }
  ];

  votingEmmiter = new Subject<boolean>();

  constructor(private http: HttpClient) {
    // init
    this.cat = this.cats[0];
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

  getCatById(catId: number) {
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
    // subcribe se suele agregar en los componentes
    return this.http.get<CatInterface[]>(this.randomCatUrl, this.httpOptions);
    // type is optional but is recommend to be explicit
    //   .pipe(
    //   esto es por alguna transformación adicional de la data que se requiera hacer se utiiza pipe
    //     map( (data: CatInterface[] ) => {  // type is optional
    //       const atributosCat: CatInterface[] = [];
    //       for (const key in data) {
    //         if (data.hasOwnProperty(key)) {
    //           atributosCat.push({ ...data[key] } );
    //         }
    //       }
    //       return atributosCat;
    //   }));
  }
  getCat() {
    return this.cat;
  }

  uploadCat(file: File) {
    const formData = new FormData();
    formData.append('file', file);

    return this.http.post(
      'https://api.thecatapi.com/v1/images/upload',
           formData,
      this.httpOptions);
  }
  // https://api.thecatapi.com/v1/votes
  // get with auth key to get my votes
  votingCat(userVote: Voting) {

    return this.http.post(
        this.votingCatUrl,
        userVote,
        this.httpOptions
    );
  }
}
