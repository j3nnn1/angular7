# angular7
# to read always

usar nvm
```
nvm use 10.15.3
```
mover a carpeta del proyecto 

```
cd ang7-clean
```
iniciar servidor

```
ng  serve
```
=======
# angular 8
## ANG-73 

Instead of:

@ViewChild('serverContentInput') serverContentInput: ElementRef;
use

@ViewChild('serverContentInput', {static: true}) serverContentInput: ElementRef;


This is a temporary adjustment which will NOT be required anymore once Angular 9 is released!
