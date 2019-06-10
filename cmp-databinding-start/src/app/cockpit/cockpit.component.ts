import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  serverElements = [];
  newServerName = '';
  newServerContent = '';

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
  onAddServer(serverData: {serverName: string, serverContent: string}) {

      this.serverCreated.emit({
        serverName: this.newServerName,
        serverContent: this.newServerContent
      });
    // this.serverElements.push({
    //   type: 'server',
    //   name: serverData.serverName,
    //   content: serverData.serverContent
    // });
  }

  onAddBluePrint(blueprintData: {serverName: string, serverContent: string}) {
  this.blueprintCreated.emit({
        serverName: this.newServerName,
        serverContent: this.newServerContent
  });
    // this.serverElements.push({
    //   type: 'blueprint',
    //   name: blueprintData.serverName,
    //   content:  blueprintData.serverContent
    // });
  }

}
