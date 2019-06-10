import {Component, OnInit, Output, EventEmitter, ViewChild, ElementRef} from '@angular/core';

let viewChild = ViewChild('serverContentInput');

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  serverElements = [];
  // newServerName = '';
  // newServerContent = '';

  @viewChild serverContentInput: ElementRef;
  // @ViewChild(Cock) serverContentInput;

  // CUSTOM EVENTS
  // with our own event in the html element
  // make you own event
  @Output() serverCreated = new EventEmitter<{ serverName: string, serverContent: string }>();
  // Output let you pass a variable from child component to father component
  @Output('bpCreated') blueprintCreated = new EventEmitter<{ serverName: string, serverContent: string }>();

  constructor() {
  }

  ngOnInit() {
  }
  // DEFAULTS EVENTS
  // with the event click
  // onAddServer(serverData: {serverName: string, serverContent: string}) {
  onAddServer(nameInput: HTMLInputElement) {
      console.log(this.serverContentInput); // this is an element Ref

      // EXAMPLE LOCAL REFERENCE
      // console.log(nameInput.value); // the element with all his properties.
      // this.serverCreated.emit({
      //   serverName: nameInput.value, // local reference
      //   serverContent: this.newServerContent
      // });

    // EXAMPLE decorator input/output
    // this.serverElements.push({
    //   type: 'server',
    //   name: serverData.serverName,
    //   content: serverData.serverContent
    // });
  }

  onAddBluePrint(blueprintData: {serverName: string, serverContent: string}) {

    // local reference
    // this.blueprintCreated.emit({
  //       serverName: this.newServerName,
  //       serverContent: this.newServerContent
  // });

    // input/output example
    // this.serverElements.push({
    //   type: 'blueprint',
    //   name: blueprintData.serverName,
    //   content:  blueprintData.serverContent
    // });
  }

}
