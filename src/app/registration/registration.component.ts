import { Component, OnInit } from '@angular/core';
import { faKey, faEnvelope, faEyeSlash, faEye,faUser,faIdCard,faBriefcase} from '@fortawesome/free-solid-svg-icons';
import {faFacebook, faGithub, faGoogle, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import{} from '@fortawesome/free-regular-svg-icons';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { match_password } from 'src/custom-validators/match-password';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

    // Font Awesome Icon
    fakey = faKey;
    faEnvelope = faEnvelope;
    faEyeSlash = faEyeSlash;
    faEye = faEye;
    faFacebook = faFacebook;
    faGoogle = faGoogle;
    faGithub = faGithub;
    faLinkedin = faLinkedin;
    faUser = faUser;
    faIdCard = faIdCard;
    faBriefcase = faBriefcase;
  // error message variables
  username_error_message: string | undefined;
  studentid_error_message: string | undefined;
  email_error_message: string | undefined;
  role_error_message: string | undefined;
  password_error_message: string | undefined;
  confirmpassword_error_message: string | undefined;
  confirmpasswordmatch_error_message: string | undefined;
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
  studentid_regex = /^\d{9}$/;
  username_regex = /^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/;
  //RegisterForm builder
  registrationForm:FormGroup = this.formbuilder.group({
    username: ['',[Validators.required,Validators.pattern(this.username_regex)]],
    studentid: ['',[Validators.required,Validators.maxLength(9),Validators.pattern(this.studentid_regex)]],
    email:['',[Validators.required,Validators.email,Validators.pattern(this.email_regex)]],
    role:['',[Validators.required]],
    password:['',[Validators.required,Validators.maxLength(32),Validators.minLength(8)]],
    confirmpassword:['',[Validators.required,Validators.minLength(8),Validators.maxLength(32)]],
  },
  {
    validators: this.Mustmatch('password','confirmpassword')
  }
  );
  //getcontrol function for input validation
    getControl(name:any): AbstractControl | null{
      return this.registrationForm.get(name);
    }
  // Success Massage modal after registration
  open_success_modal(){
    const modal = document.getElementById('myModal');
    if(modal!=null){
      modal.style.display="block";
    }
  }
  close_success_modal(){
    const modal = document.getElementById('myModal');
    if(modal!=null){
      modal.style.display="";
    }
  }
  //oninit function
    ngOnInit(): void {
      //username
      const username_error_control = this.registrationForm.get('username');
      username_error_control?.valueChanges.subscribe(username=>{
        this.validate_username(username_error_control as FormControl);
      })
      //studentid
      const studentid_error_control = this.registrationForm.get('studentid');
      studentid_error_control?.valueChanges.subscribe(studentid=>{
        this.validate_studentid(studentid_error_control as FormControl);
      })
      //email
      const email_error_control = this.registrationForm.get('email');
      email_error_control?.valueChanges.subscribe(email=>{
        this.validate_email(email_error_control as FormControl);
      })
      //role
      const role_error_control = this.registrationForm.get('role');
      role_error_control?.valueChanges.subscribe(role=>{
        this.validate_role(role_error_control as FormControl);
      })
      //password
      const password_error_control = this.registrationForm.get('password');
      password_error_control?.valueChanges.subscribe(password=>{
        this.validate_password(password_error_control as FormControl);
      })
      //confirmpassword
      const confirmpassword_error_control = this.registrationForm.get('confirmpassword');
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
        };
        if (username_error_control.errors?.['pattern']) {
          this.username_error_message = "Username pattern is not valid "
        };
      }

    }
  //studentid
    studentid_error_alert_msg:boolean | undefined;
    validate_studentid(studentid_error_control:FormControl): void {
      this.studentid_error_message = ' ';
      this.studentid_error_alert_msg = false;
      if (studentid_error_control.invalid && (studentid_error_control.touched || studentid_error_control.dirty)) {
        this.studentid_error_alert_msg =true;
        if (studentid_error_control.errors?.['required']) {
          this.studentid_error_message = 'Student id is required';
        }
        if (studentid_error_control.errors?.['pattern']) {
          this.studentid_error_message = 'Student id must be 9 digits';
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
  //role
  role_error_alert_msg:boolean | undefined;
    validate_role(role_error_control:FormControl): void {
      this.role_error_message = ' ';
      this.email_error_alert_msg = false;
      if (role_error_control.invalid && (role_error_control.touched || role_error_control.dirty)) {
        this.role_error_alert_msg = true;
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
  mismatch_error_alert_msg:boolean | undefined;
  mismatch_error_message:string | undefined;
  validate_confirmpassword(confirmpassword_error_control:FormControl): void {
    this.confirmpassword_error_message = ' ';
    this.confirmpassword_error_alert_msg = false;
    this.mismatch_error_alert_msg = false;
    this.mismatch_error_message = ' ';
    if (confirmpassword_error_control.invalid && (confirmpassword_error_control.touched || confirmpassword_error_control.dirty)) {
      this.confirmpassword_error_alert_msg = true;
      this.mismatch_error_alert_msg = true;
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
  //match password
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

  //password strength checker


  registered(){
    console.log(this.registrationForm.value,this.registrationForm.invalid);
    this.registrationForm.reset();
  }


}
