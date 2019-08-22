import { Component } from '@angular/core';
import { Subject} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cat-cards';

  parentSubject: Subject<string> = new Subject();

  cardAnimation(value) {
    this.parentSubject.next(value);
  }
}
