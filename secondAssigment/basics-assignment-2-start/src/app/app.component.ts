import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  username = '';
  isAllowResetUsername = false;
  onResetUsername(event: Event) {
      this.username = '';
      this.isAllowResetUsername = false;
  }
  onUpdateUsername(event: Event) {
      console.log(event.target.value);
      this.isAllowResetUsername = true;
  }
}
