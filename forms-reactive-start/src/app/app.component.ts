import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

// FormGroup is a wrap from ngForm

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  genders = ['male', 'female'];
  signupForm: FormGroup;

  ngOnInit() {
    this.signupForm = new FormGroup({
      'username': new FormControl(null), // typescript control with the template control
      'email': new FormControl(null),
      'gender': new FormControl('female'),
    });
  }
}
