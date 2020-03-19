import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormArray, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.css']
})
export class ImageUploadComponent implements OnInit {
  urls = new Array<string>();
  registerForm: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      img:['',Validators.required],
      languages: this.formBuilder.array([
        this.initlanguage(),
    ])
    
  });
  }


  initlanguage() {
    return this.formBuilder.group({
      react: ['']
    });
  }

addLanguage() {
  const control = <FormArray>this.registerForm.controls['languages'];
  control.push(this.initlanguage());
}

removeLanguage(i: number) {
  const control = <FormArray>this.registerForm.controls['languages'];
  control.removeAt(i);
}
  get f() { return this.registerForm.controls; }


  onSubmit() {
    this.submitted = true;
    console.log("dds",this.registerForm.value)
    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }

}
  detectFiles(event) {
    this.urls = [];
    let files = event.target.files;
     if (files) {
      for (let file of files) {
        let reader = new FileReader();
        reader.onload = (e: any) => {
          this.urls.push(e.target.result);
        }
        reader.readAsDataURL(file);
      }
     }
   }


}
