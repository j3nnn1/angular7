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
      if (event.target.value === '' || event.target.value === undefined || event.target.value == null) {
        this.isAllowResetUsername = false;
      } else {
        this.isAllowResetUsername = true;
      }
  }
}
