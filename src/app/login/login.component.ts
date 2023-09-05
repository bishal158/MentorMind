import { Component, OnInit } from '@angular/core';
import { faKey, faEnvelope, faEyeSlash, faEye} from '@fortawesome/free-solid-svg-icons';
import {faFacebook, faGithub, faGoogle, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import {} from '@fortawesome/free-regular-svg-icons';
import { FormGroup,FormControl, Validators,FormBuilder, AbstractControl } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  // Font Awesome Icon variable
  fakey = faKey;
  faEnvelope = faEnvelope;
  faEyeSlash = faEyeSlash;
  faEye = faEye;
  faFacebook = faFacebook;
  faGoogle = faGoogle;
  faGithub = faGithub;
  faLinkedin = faLinkedin;
  // error message variable
  email_error_message: string | undefined;
  password_error_message: string | undefined;
  //password visiable logic
  visiable:boolean = true;
  changetype:boolean = true;
  view(){
    this.visiable = !this.visiable;
    this.changetype = !this.changetype;
  }
  //constructor for formbuilder
  constructor(private formbuilder:FormBuilder){}
  //loginform control
  //email ReGex for email validation
  email_regex = /^(?=.{1,254}$)(?=.{1,64}@)[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+(\.[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+)*@[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?(\.[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?)*$/;
  //loginform builder
  loginForm:FormGroup = this.formbuilder.group({
    email:['',[Validators.required,Validators.email,Validators.pattern(this.email_regex)]],
    password:['',[Validators.required,Validators.maxLength(32),Validators.minLength(8)]]
  });
  getControl(name:any): AbstractControl | null{
    return this.loginForm.get(name);
  }
  // oninit function
  ngOnInit(): void {
    // email error
    const email_error_control = this.loginForm.get('email');
    email_error_control?.valueChanges.subscribe(email=>{
      this.validate_email(email_error_control as FormControl);
    });
    // password error
    const password_error_control = this.loginForm.get('password');
    password_error_control?.valueChanges.subscribe(password=>{
      this.validate_password(password_error_control as FormControl);
    });
  };

  //condition for email error msg
  email_error_alert_msg:boolean | undefined;
  validate_email(email_error_control:FormControl):void{
    this.email_error_message=' ';
    this.email_error_alert_msg= false;
    if (email_error_control.invalid && (email_error_control.touched||email_error_control.dirty)) {
      this.email_error_alert_msg=true;
      if (email_error_control.errors?.['required']) {
        this.email_error_message = 'Email is required';
      };
      if (email_error_control.errors?.['email']) {
        this.email_error_message = 'Email is not valid';
      };
      if(email_error_control.errors?.['pattern']){
        this.email_error_message = 'Email pattern is not valid';
      }

    };
  };
  //condition for password error msg
  password_error_alert_msg:boolean | undefined;
  validate_password(password_error_control:FormControl):void{
    this.password_error_message=' ';
    this.password_error_alert_msg= false;
    if (password_error_control.invalid && (password_error_control.touched|| password_error_control.dirty)) {
      this.password_error_alert_msg=true;
      if (password_error_control.errors?.['required']) {
        this.password_error_message = 'Password is required';
      };
      if (password_error_control.errors?.['minlength']) {
        this.password_error_message = 'Password must be at least 8 characters';
      };
      if (password_error_control.errors?.['maxlength']) {
        this.password_error_message = 'Password must be at most 32 characters';
      };
    };
  };
  logged_in(){

    console.log(this.loginForm.value,this.loginForm.invalid,this.email_error_message);
    this.loginForm.reset();
  }


}
