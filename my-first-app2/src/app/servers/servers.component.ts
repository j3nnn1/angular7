import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  /* template: `<app-server></app-server><app-server></app-server>`, */
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  serverCreationStatus = 'No server was created';
  serverName = 'TestServer';
  serverCreated = false;
  servers = [
    'TestServer',
    'TestServer2'
  ];

  constructor() {

    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {
  }
  // convention all method with "on" => would trigger an event
  // event binding use parentesis in the template
  // and should call a funtion in typescripts code

  onCreateServer() {
    this.serverCreated = true;
    this.serverCreationStatus = 'Server was created';
    this.servers.push(this.serverName);
  }
  // $event => data emited by this event
  // information about this event
  // event: any
  onUpdateServerName( event: Event) {
    console.log(event);
    this.serverName = (event.target as HTMLInputElement).value;
    // this => this.serverName = (<HTMLInputElement> event.target).value; is the same that the line before
    // updating server name is one way binding example
  }
}
