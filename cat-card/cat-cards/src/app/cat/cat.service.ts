import { Injectable } from '@angular/core';
import { Cat } from './cat.model';
import {HttpClient, HttpHeaders, HttpClientModule} from '@angular/common/http';

@Injectable()

// {
//  providedIn: 'root' // this is important because this denote
//  if will use the same instance in this case will use another instance diferent from root
// }

export class CatService {

  private defaultPictureUrl = '/assets/cat.jgp';
  public  isPictureUrlAccesible = false;
  private httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*'
      })
  };

  constructor(private http: HttpClient) {
  }

  logInitCatService() {
    console.log('desde la clase Cat Services');
  }
  // true or false
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
  getCat(catId: number) {
       return { id: '2j0',
         pictureUrl: 'https://cdn2.thecatapi.com/images/2j0.jp',
         url: 'https://cdn2.thecatapi.com/images/2j0.jpg',
         width: 400,
         height: 266, name: ('Nombre del Gato:' + ' 2j0'), lastname: 'kkkk test',
         categorie: 2,
         categorieName: '2j0'};
  }
}
