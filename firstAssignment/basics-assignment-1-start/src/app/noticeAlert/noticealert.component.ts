import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notice-alert',
  template: `<div class="alert alert-primary" role="alert">  A needle notice message from noticeAlert Component with tag selector <a>with css</a></div>`,
  styleUrls: ['./noticealert.component.css']
})
export class NoticeAlertComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
