import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-warning-alert',
  template: `<div class="alert alert-warning" role="alert">  A warning message from a warning component with tag selector </div>`,
  styleUrls: ['./warningalert.component.css']
})
export class WarningAlertComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
