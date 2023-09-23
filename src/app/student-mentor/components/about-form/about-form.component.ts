import { Component } from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {faUser} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-about-form',
  templateUrl: './about-form.component.html',
  styleUrls: ['./about-form.component.css']
})
export class AboutFormComponent {

  // Font Awesome Icon
  protected readonly faUser = faUser;
  // error message variables
  about_error_message: string | undefined;
  limit = 1500;
  //constructor for form builder
  constructor(private formbuilder:FormBuilder){}
  //registrationform control
  /*username,email,studentid,password and confirm password validation and regex */
  //RegisterForm builder
  aboutForm:FormGroup = this.formbuilder.group({
      about: ['',[Validators.required,Validators.maxLength(this.limit)]],
    },
  );
  //getcontrol function for input validation
  getControl(name:any): AbstractControl | null{
    return this.aboutForm.get(name);
  }
  //oninit function
  ngOnInit(): void {
    //fullname
    const about_error_control = this.aboutForm.get('about');
    about_error_control?.valueChanges.subscribe(about=>{
      this.validate_about(about_error_control as FormControl);
    })
    //Counter validation for about
    let counter: any | undefined;
    let about_textarea:any | undefined;
    let textLength:any | undefined;
    about_textarea = document.getElementById('about');
    counter = document.getElementById('counter');
    let  limit = this.limit;
    counter.textContent  = 0+"/"+limit;
    about_textarea.addEventListener("input",function (){
      textLength = about_textarea.value.length;
      counter.textContent = textLength + "/" +limit;
      if (textLength>limit){
        counter.style.color = "red";
      }
      else{
        counter.style.color = "black"
      }
    })
  }
  //about
  about_error_alert_msg:boolean | undefined;
  validate_about(about_error_control:FormControl): void {
    this.about_error_message = ' ';
    this.about_error_alert_msg = false;
    if (about_error_control.invalid && (about_error_control.touched || about_error_control.dirty)) {
      this.about_error_alert_msg = true;
      if(about_error_control.errors?.['required']){
        this.about_error_message= 'About is required';
      }
      if(about_error_control.errors?.['maxlength']){
        this.about_error_message= 'Maximum length is '+this.limit;
      }
    }
  }

  save(){
    console.log(this.aboutForm.value,this.aboutForm.invalid);
    // reset the form after saving
    this.aboutForm.reset();
    // make counter 0 after saving
    let counter: any | undefined;
    counter = document.getElementById('counter');
    let  limit = this.limit;
    counter.textContent  = 0+"/"+limit;
  }

}
