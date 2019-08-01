import {Component, OnInit, Output, EventEmitter, ViewChild, ElementRef} from '@angular/core';



@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  serverElements = [];
  // newServerName = '';
  // newServerContent = '';

  // CUSTOM EVENTS - with our own event in the html element
  // make you own event
  @Output() serverCreated = new EventEmitter<{ serverName: string, serverContent: string }>();
  // Output let you pass a variable from child component to father component
  @Output('bpCreated') blueprintCreated = new EventEmitter<{ serverName: string, serverContent: string }>();


  // @ViewChild(Cock) serverContentInput;
  @ViewChild('serverContentInput', null) serverContentInput: ElementRef;
  // the teacher dont recommend this way for access to dom html element
  // with local reference you should not change this properties
  // with local reference is similar two way binding,
  // you could fetch from model and pull response
  // with local reference not directly edit the dom. or pass data
  constructor() {
  }

  ngOnInit() {
  }
  // DEFAULTS EVENTS
  // with the event click
  // onAddServer(serverData: {serverName: string, serverContent: string}) {
  onAddServer(nameInput: HTMLInputElement) {
      console.log(this.serverContentInput.nativeElement); // this is an element Ref

      // EXAMPLE LOCAL REFERENCE
      // console.log(nameInput.value); // the element with all his properties.
      this.serverCreated.emit({
        serverName: nameInput.value, // local reference
        serverContent:this.serverContentInput.nativeElement.value
      });

    // EXAMPLE decorator input/output
    // this.serverElements.push({
    //   type: 'server',
    //   name: serverData.serverName,
    //   content: serverData.serverContent
    // });
  }

  // with template variables
  // onAddBluePrint(blueprintData: {serverName: string, serverContent: string}) {
  onAddBluePrint(nameInput: HTMLInputElement) {

    // local reference passed by Val, and passed local reference between templates
    this.blueprintCreated.emit({
        serverName: nameInput.value,
        serverContent: this.serverContentInput.nativeElement.value
    });

    // input/output example
    // this.serverElements.push({
    //   type: 'blueprint',
    //   name: blueprintData.serverName,
    //   content:  blueprintData.serverContent
    // });
  }

}
