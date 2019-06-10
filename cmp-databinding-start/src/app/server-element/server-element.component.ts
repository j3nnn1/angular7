import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit {

  // Decorator in class level or in properties level
  // end js object
  @Input() element: { type: string, name: string,     content: string };
  // end js object

  constructor() { }

  ngOnInit() {
  }

}
