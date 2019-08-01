import {Component, ElementRef, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f', {static: false}) signupForm: NgForm;
  user = {
    username: '',
    email: '',
    secretQuestion: '',
    answer: '',
    gender: ''
  };
  submitted = false;

  defaultQuestion: String = 'pet';
  answer: String = '';
  genders  = ['male', 'female'];

  suggestUserName() {
    const suggestedName = 'Superuser';
    // this could be set by two way data binding
    // also with the local reference as this example
    // this way overwrite all data form
    this.signupForm.setValue({
        userData: {
          username: suggestedName,
          email: ''
        },
      secret: 'pet',
      questionAnswer: '',
      gender: 'male'
    });
    // this.signupform.form.patchValue({ userData:  { username: suggestedName }}) overwrite specific data not all data form
  }

  // A receiving form by parameter in onSubmit
  // onSubmit(form: ElementRef) {
  //       console.log(form);
  // }
  // receiving form by local reference

  // B option
  onSubmit() {
        // console.log(this.signupForm);
    this.submitted = true;
    this.user.username = this.signupForm.value.userData.username;
    this.user.email = this.signupForm.value.userData.email;
    this.user.secretQuestion = this.signupForm.value.secret;
    this.user.answer = this.signupForm.value.questionAnswer;
    this.user.gender = this.signupForm.value.gender;
    this.signupForm.reset(); // reset state, tracker and values
  }
}
