import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, FormControl } from '@angular/forms';
import {faKey, faEnvelope, faEyeSlash, faEye, faUser, faCircleCheck,} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
      // Font Awesome Icon
      fakey = faKey;
      faEnvelope = faEnvelope;
      faEyeSlash = faEyeSlash;
      faEye = faEye;
      faUser = faUser;
      faCircleCheck = faCircleCheck;
    // error message variables
    username_error_message: string | undefined;
    email_error_message: string | undefined;
    password_error_message: string | undefined;
    confirmpassword_error_message: string | undefined;
    //for password visibility
      password_visiable:boolean = true;
      password_changetype:boolean = true;
      view1(){
        this.password_visiable = !this.password_visiable;
        this.password_changetype = !this.password_changetype;
      }
    //for confirm password visibility
      confirm_password_visiable:boolean=true;
      confirm_password_changetype:boolean=true;
      view2(){
        this.confirm_password_visiable = !this.confirm_password_visiable;
        this.confirm_password_changetype = !this.confirm_password_changetype;
      }


    //constructor for form builder
      constructor(private formbuilder:FormBuilder){}
    //registrationform control
    /*username,email,studentid,password and confirm password validation and regex */
    email_regex = /^(?=.{1,254}$)(?=.{1,64}@)[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+(\.[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+)*@[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?(\.[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?)*$/;
    username_regex = /^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/;
    //RegisterForm builder
    forgotpasswordform:FormGroup = this.formbuilder.group({
      username: ['',[Validators.required,Validators.pattern(this.username_regex)]],
      email:['',[Validators.required,Validators.email,Validators.pattern(this.email_regex)]],
      password:['',[Validators.required,Validators.maxLength(32),Validators.minLength(8)]],
      confirmpassword:['',[Validators.required,Validators.minLength(8),Validators.maxLength(32)]],
    },
      {
        validators: this.Mustmatch('password','confirmpassword')
      }
    );
    //getcontrol function for input validation
      getControl(name:any): AbstractControl | null{
        return this.forgotpasswordform.get(name);
      }
    //oninit function
      ngOnInit(): void {
        //username
        const username_error_control = this.forgotpasswordform.get('username');
        username_error_control?.valueChanges.subscribe(username=>{
          this.validate_username(username_error_control as FormControl);
        })
        //email
        const email_error_control = this.forgotpasswordform.get('email');
        email_error_control?.valueChanges.subscribe(email=>{
          this.validate_email(email_error_control as FormControl);
        })
        //password
        const password_error_control = this.forgotpasswordform.get('password');
        password_error_control?.valueChanges.subscribe(password=>{
          this.validate_password(password_error_control as FormControl);
        })
        //confirmpassword
        const confirmpassword_error_control = this.forgotpasswordform.get('confirmpassword');
        confirmpassword_error_control?.valueChanges.subscribe(confirmpassword=>{
          this.validate_confirmpassword(confirmpassword_error_control as FormControl);
        })
      }
    /*Condition for username,studentid,email,role,password,confirmpassword error msg */

    //username
      username_error_alert_msg:boolean | undefined;
      validate_username(username_error_control:FormControl): void {
        this.username_error_message = ' ';
        this.username_error_alert_msg = false;
        if (username_error_control.invalid && (username_error_control.touched || username_error_control.dirty)) {
          this.username_error_alert_msg = true;
          if(username_error_control.errors?.['required']){
            this.username_error_message= 'Username is required';
          }
          if (username_error_control.errors?.['pattern']) {
            this.username_error_message = "Username pattern is not valid "
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
    //password
      password_error_alert_msg:boolean | undefined;
      validate_password(password_error_control:FormControl): void {
        this.password_error_message = ' ';
        this.password_error_alert_msg = false;
        if (password_error_control.invalid && (password_error_control.touched || password_error_control.dirty)) {
          this.password_error_alert_msg = true;
          if(password_error_control.errors?.['required']){
            this.password_error_message = 'Password is required';
          }
          if(password_error_control.errors?.['minlength']){
            this.password_error_message = 'Password must be at least 8 characters'
          }
          if (password_error_control.errors?.['maxlength']) {
            this.password_error_message= 'Password must be at most 32 characters';
          }
        }
      }
    //confirmpassword
    confirmpassword_error_alert_msg:boolean | undefined;
    validate_confirmpassword(confirmpassword_error_control:FormControl): void {
      this.confirmpassword_error_message = ' ';
      this.confirmpassword_error_alert_msg = false;
      if (confirmpassword_error_control.invalid && (confirmpassword_error_control.touched || confirmpassword_error_control.dirty)) {
        this.confirmpassword_error_alert_msg = true;
        if (confirmpassword_error_control.errors?.['required']){
          this.confirmpassword_error_message = 'Confirm your password'
        }
        if (confirmpassword_error_control.errors?.['minlength']) {
          this.confirmpassword_error_message = 'Must be at least 8 characters';
        }
        if (confirmpassword_error_control.errors?.['maxlength']) {
          this.confirmpassword_error_message = 'Must be at most 32 characters';
        }
      }
    }
  Mustmatch(password: string, confirmpassword: string) {
    return(formgroup:FormGroup)=>{
      const passwordcontrol = formgroup.controls?.[password];
      const confirmpasswordcontrol = formgroup.controls?.[confirmpassword];
      if (confirmpasswordcontrol.errors && !confirmpasswordcontrol.errors?.['Mustmatch']) {
        return ;
      }
      if(passwordcontrol.value !== confirmpasswordcontrol.value) {
        confirmpasswordcontrol.setErrors({Mustmatch:true});
      }
      else{
        confirmpasswordcontrol.setErrors(null);
      }
    }
  }
    registered(){
      console.log(this.forgotpasswordform.value,this.forgotpasswordform.invalid);
      this.forgotpasswordform.reset();
    }



  open_success_modal(){
    const modal = document.getElementById('myModal');
    if(modal!=null){
      modal.style.display="block";
    }
  }
  close_success_modal(){
    const modal = document.getElementById('myModal');
    if(modal!=null){
      modal.style.display="none";
    }
  }
}
