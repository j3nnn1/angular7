import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-cat-add',
  templateUrl: './cat-add.component.html',
  styleUrls: ['./cat-add.component.css']
})
export class CatAddComponent implements OnInit {

  @ViewChild('f', {static: true}) catAddForm: NgForm;
  constructor() {

  }

  ngOnInit() {
    console.log('desde la clase add cat');
  }

 // onSubmit(form: NgForm) {
    onSubmit() {
      console.log(this.catAddForm); // in this form you access data before submit. validation maybe
//       console.log(form);
  }
}
