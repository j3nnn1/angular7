import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
// ViewEncapsulation.None by default is emulated
// native use shadow DOM always
// emulated use only when is execute in a browser that support  this features

export class ServerElementComponent implements OnInit {

  // Decorator in class level or in properties level
  // end js object
  // srvElement is a alias

  @Input('srvElement') element: { type: string, name: string,     content: string };
  // end js object

  constructor() { }

  ngOnInit() {
  }

}
