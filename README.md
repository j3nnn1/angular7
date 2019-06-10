# angular7
# angular 8
## ANG-73 

Instead of:

@ViewChild('serverContentInput') serverContentInput: ElementRef;
use

@ViewChild('serverContentInput', {static: true}) serverContentInput: ElementRef;


This is a temporary adjustment which will NOT be required anymore once Angular 9 is released!
