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
       return { id: 'wishy',
         pictureUrl: 'dsdsd',
         url: 'ddsdsd',
         width: 333,
         height: 200, name: 'test', lastname: 'kkkk test',
         categorie: 2,
         categorieName: 'supercalifragilistico'};
  }
}
