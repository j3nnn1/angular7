import {Directive, Renderer2, OnInit, ElementRef,  HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  @Input() defaultColor: string = 'transparent';
  @Input('appBetterHighlight') highlightColor: string = 'blue';

  /* input param : which propety of the host element we want to bind */
  @HostBinding('style.backgroundColor') backgroundColor: string;

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
      this.backgroundColor = this.defaultColor;
  }
  // event name support by dom
  // event data

  @HostListener('mouseenter') mouseover(eventData: Event) {
//      this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue', false, false);
      this.backgroundColor = this.highlightColor;
  }
  @HostListener('mouseleave') mouseleave(eventData: Event) {
//    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent', false, false);
    this.backgroundColor = this.defaultColor;
  }

}
