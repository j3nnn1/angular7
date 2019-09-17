import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';
import {InputFiles} from '@schematics/angular/third_party/github.com/Microsoft/TypeScript/lib/typescript';
import {CatService} from '../cat/cat.service';

@Component({
  selector: 'app-cat-add',
  templateUrl: './cat-add.component.html',
  styleUrls: ['./cat-add.component.css']
})
export class CatAddComponent implements OnInit {

  @ViewChild('f', {static: true}) catAddForm: NgForm;
  @ViewChild('uploadedImage', {static: true}) uploadedImage: InputFiles;

  public imageName: string;
  public imageUrl: string | ArrayBuffer;
  public imageFile: File;
  public error = null;
  public message = null;

  constructor(private catService: CatService) {

  }

  ngOnInit() {
    console.log('desde la clase add cat');
  }

  // ALTERNATIVE: onSubmit(form: NgForm) {
  onSubmit() {
      // console.log(this.catAddForm.value.catImage);
      // console.log(this.imageFile);
      this.catService.uploadCat(this.imageFile).subscribe(
        data => {
          this.message = 'Uploaded Successful!';
          this.error = null;
        },
        error =>  {
          this.error = error.error.message;
          this.message = null;
          // console.log(error.message);

        }
      );
      // ALTERNATIVE: console.log(form); // in this form you access data before submit. validation maybe
  }

  onFilePicked(inputValue: any) {
      const files = inputValue.srcElement.files;
      if (files[0] !== undefined) {
        this.imageName = files[0].name;

        const fr = new FileReader ();
        fr.readAsDataURL(files[0])
        fr.addEventListener('load', () => {
          this.imageUrl = fr.result;
          this.imageFile = files[0];
        });
      }
  }
}
