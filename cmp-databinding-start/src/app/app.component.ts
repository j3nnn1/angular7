import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [
    {type: 'server', name: 'testServer', content: 'Just a test!'},
  ];
  newServerName = '';
  newServerContent = '';

  onServerAdded(ServerData: {serverName: string, serverContent: string}) {
      this.serverElements.push(
        {
          type: 'server',
          name: ServerData.serverName,
          content: ServerData.serverContent
        }
      );
  }
  onBlueprintAdded(BlueprintData: {serverName:string, serverContent: string}) {
      this.serverElements.push(
        {
        type: 'blueprint',
        name: BlueprintData.serverName,
        content: BlueprintData.serverContent
        }
      );
  }
  onChangeFirst() {
    this.serverElements[0].name = 'Changed';
  }
  onDestroyFirst() {
    this.serverElements.splice(0, 1);
  }
}
