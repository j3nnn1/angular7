import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showSecret = false;
  countClicks = [];
  messageButton = 'Display Details';
  display = 'none';
  getDisplay() {
    return this.display;
  }
  getColor(index) {
      console.log(index);
      if (index > 5 ) {
        return 'blue';
      } else {
        return 'none';
      }
  }
  doToogle(event: any) {

    this.countClicks.push(event.target.textContent);
    // if (this.display === 'none') {
    //   this.display = 'block';
    //   this.messageButton = 'Hide Details';
    // } else {
    //   this.display = 'none';
    //   this.messageButton = 'Display Details';
    // }
    this.showSecret = !this.showSecret
    if (this.showSecret) {
      this.messageButton = 'Hide Details';
    } else {
      this.messageButton = 'Display Details';
    }
  }
}
