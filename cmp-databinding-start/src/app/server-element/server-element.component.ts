import {
  Component,
  OnInit,
  Input,
  ViewEncapsulation,
  OnChanges,
  SimpleChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, ViewChild, ContentChild
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
// ViewEncapsulation.None by default is emulated
// native use shadow DOM always
// emulated use only when is execute in a browser that support  this features

export class ServerElementComponent implements OnInit,
  OnChanges,
  DoCheck,
  AfterContentChecked,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  ViewChild,
  ContentChild
{

  // Decorator in class level or in properties level
  // end js object
  // srvElement is a alias

  @Input('srvElement') element: { type: string, name: string,     content: string };
  // end js object

  @Input('') name: string;
  @ViewChild('heading', null) header: ElementRef;
  @ContentChild('contentParagraph', {static: true}) paragraph: ElementRef;

  constructor() {

    console.log('constructor is called in the console');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges  is called in the console');
  }

  ngOnInit() {
    console.log('ngOnInit is called in the console');
    console.log('textcontent: ' + this.header.nativeElement.textContent);
    console.log('contentView: ' + this.paragraph.nativeElement.textContent);
  }
  ngDoCheck(): void {
    // this cost a lot of perfomance when you doo need something manually
    console.log('ngDoCheck is called in the console');
  }
  ngAfterContentInit() {
    console.log('ngAfterContent Init');
    console.log('contentView: ' + this.paragraph.nativeElement.textContent);
  }
  ngAfterContentChecked( ) {
    console.log('ngAfterContentChecked Init');
  }
  ngAfterViewInit() {
    console.log('textcontent: ' + this.header.nativeElement.textContent);
    console.log('ngAfterViewInit Init');
  }
  ngAfterViewChecked() {
    console.log('ngAfterViewChecked Init');
  }
  ngOnDestroy() {
    console.log('ng DESTROY');
  }
}
