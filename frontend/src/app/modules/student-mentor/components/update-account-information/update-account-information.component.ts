import { Component } from '@angular/core';
import {faEnvelope, faEye, faEyeSlash, faKey, faUser, faCircleCheck, faPhone} from "@fortawesome/free-solid-svg-icons";
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-update-account-information',
  templateUrl: './update-account-information.component.html',
  styleUrls: ['./update-account-information.component.css']
})
export class UpdateAccountInformationComponent {
  protected readonly faPhone = faPhone;
  protected readonly faKey = faKey;
  protected readonly faEyeSlash = faEyeSlash;
  protected readonly faEye = faEye;
  protected readonly faEnvelope = faEnvelope;
  // Font Awesome Icon
  fakey = faKey;
  faUser = faUser;
  // error message variables
  fullname_error_message: string | undefined;
  email_error_message: string | undefined;
  phone_error_message: string | undefined;


  //constructor for form builder
  constructor(private formbuilder:FormBuilder){}
  //registrationform control
  /*username,email,studentid,password and confirm password validation and regex */
  email_regex = /^(?=.{1,254}$)(?=.{1,64}@)[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+(\.[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+)*@[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?(\.[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?)*$/;
  fullname_regex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
  phone_regex = /^(?:\+88|88)?(01[3-9]\d{8})$/
  //RegisterForm builder
  update_information:FormGroup = this.formbuilder.group({
      fullname: ['',[Validators.required,Validators.maxLength(20),Validators.pattern(this.fullname_regex)]],
      email:['',[Validators.required,Validators.email,Validators.pattern(this.email_regex)]],
      phone:['',[Validators.required,Validators.pattern(this.phone_regex)]],
    },

  );
  //getcontrol function for input validation
  getControl(name:any): AbstractControl | null{
    return this.update_information.get(name);
  }
  //oninit function
  ngOnInit(): void {
    //username
    const fullname_error_control = this.update_information.get('fullname');
    fullname_error_control?.valueChanges.subscribe(username=>{
      this.validate_username(fullname_error_control as FormControl);
    })
    //email
    const email_error_control = this.update_information.get('email');
    email_error_control?.valueChanges.subscribe(email=>{
      this.validate_email(email_error_control as FormControl);
    })
    //phone
    const phone_error_control= this.update_information.get('phone');
    phone_error_control?.valueChanges.subscribe(phone=>{
      this.validate_phone(phone_error_control as FormControl);
    })
  }
  /*Condition for username,studentid,email,role,password,confirmpassword error msg */

  //username
  fullname_error_alert_msg:boolean | undefined;
  validate_username(fullname_error_control:FormControl): void {
    this.fullname_error_message = ' ';
    this.fullname_error_alert_msg = false;
    if (fullname_error_control.invalid && (fullname_error_control.touched || fullname_error_control.dirty)) {
      this.fullname_error_alert_msg = true;
      if(fullname_error_control.errors?.['required']){
        this.fullname_error_message= 'Fullname is required';
      }
      if(fullname_error_control.errors?.['maxlength']){
        this.fullname_error_message= 'Maximum length is 20';
      }
      if (fullname_error_control.errors?.['pattern']) {
        this.fullname_error_message = "Fullname pattern is not valid "
      }
    }

  }
  //email
  email_error_alert_msg:boolean | undefined;
  validate_email(email_error_control:FormControl): void {
    this.email_error_message = ' ';
    this.email_error_alert_msg = false;
    if (email_error_control.invalid && (email_error_control.touched || email_error_control.dirty)) {
      this.email_error_alert_msg = true;
      if (email_error_control.errors?.['required']) {
        this.email_error_message = 'Email is required';
      }
      if (email_error_control.errors?.['pattern']) {
        this.email_error_message = 'Email is not valid';
      }
    }
  }
  //phone
  phone_error_alert_msg:boolean | undefined;
  validate_phone(phone_error_control:FormControl): void {
    this.phone_error_message = ' ';
    this.phone_error_alert_msg = false;
    if (phone_error_control.invalid && (phone_error_control.touched || phone_error_control.dirty)) {
      this.phone_error_alert_msg = true;
      if (phone_error_control.errors?.['required']) {
        this.phone_error_message = 'Phone is required';
      }
      if (phone_error_control.errors?.['pattern']) {
        this.phone_error_message = 'Phone is not valid';
      }
    }
  }
  update(){
    console.log(this.update_information.value,this.update_information.invalid);
    this.update_information.reset();
  }


}
