import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [
    {type: 'server', name: 'testServer', content: 'Just a test!'},
  ];
  newServerName = '';
  newServerContent = '';

}
