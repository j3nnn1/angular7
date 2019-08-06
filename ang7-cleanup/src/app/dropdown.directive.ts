import {Directive, HostBinding, HostListener, ElementRef} from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})

export class DropdownDirective {

  @HostBinding('class.open') isOpen = false;

  @HostListener('click') toogleOpen() {
    // this.isOpen = !this.isOpen;
    this.isOpen = this.elRef.nativeElement.contains(event.target) ? !this.isOpen : false;
  }

  constructor(private elRef: ElementRef) { }
  // open css class

}
