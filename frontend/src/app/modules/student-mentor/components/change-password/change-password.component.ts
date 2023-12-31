import { Component } from '@angular/core';
import {
  faCircleCheck,
  faEnvelope,
  faEye,
  faEyeSlash,
  faKey,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css'],
})
export class ChangePasswordComponent {
  // Font Awesome Icon
  fakey = faKey;
  faUser = faUser;
  faCircleCheck = faCircleCheck;
  // error message variables
  username_error_message: string | undefined;
  email_error_message: string | undefined;
  password_error_message: string | undefined;
  confirmpassword_error_message: string | undefined;
  //for password visibility
  password_visiable: boolean = true;
  password_changetype: boolean = true;
  //for confirm password visibility
  confirm_password_visiable: boolean = true;
  confirm_password_changetype: boolean = true;
  /*username,email,studentid,password and confirm password validation and regex */
  email_regex =
    /^(?=.{1,254}$)(?=.{1,64}@)[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+(\.[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+)*@[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?(\.[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?)*$/;
  username_regex = /^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/;
  //RegisterForm builder
  forgotpasswordform: FormGroup = this.formbuilder.group(
    {
      username: [
        '',
        [Validators.required, Validators.pattern(this.username_regex)],
      ],
      email: [
        '',
        [
          Validators.required,
          Validators.email,
          Validators.pattern(this.email_regex),
        ],
      ],
      password: [
        '',
        [
          Validators.required,
          Validators.maxLength(32),
          Validators.minLength(8),
        ],
      ],
      confirmpassword: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(32),
        ],
      ],
    },
    {
      validators: this.Mustmatch('password', 'confirmpassword'),
    },
  );
  //username
  username_error_alert_msg: boolean | undefined;
  //email
  email_error_alert_msg: boolean | undefined;
  //password
  password_error_alert_msg: boolean | undefined;
  //confirmpassword
  confirmpassword_error_alert_msg: boolean | undefined;

  //registrationform control
  protected readonly faKey = faKey;
  protected readonly faEyeSlash = faEyeSlash;
  protected readonly faEye = faEye;
  protected readonly faEnvelope = faEnvelope;

  //constructor for form builder
  constructor(private formbuilder: FormBuilder) {}

  /*Condition for username,studentid,email,role,password,confirmpassword error msg */

  view1() {
    this.password_visiable = !this.password_visiable;
    this.password_changetype = !this.password_changetype;
  }

  view2() {
    this.confirm_password_visiable = !this.confirm_password_visiable;
    this.confirm_password_changetype = !this.confirm_password_changetype;
  }

  //getcontrol function for input validation
  getControl(name: any): AbstractControl | null {
    return this.forgotpasswordform.get(name);
  }

  //oninit function
  ngOnInit(): void {
    //username
    const username_error_control = this.forgotpasswordform.get('username');
    username_error_control?.valueChanges.subscribe((username) => {
      this.validate_username(username_error_control as FormControl);
    });
    //email
    const email_error_control = this.forgotpasswordform.get('email');
    email_error_control?.valueChanges.subscribe((email) => {
      this.validate_email(email_error_control as FormControl);
    });
    //password
    const password_error_control = this.forgotpasswordform.get('password');
    password_error_control?.valueChanges.subscribe((password) => {
      this.validate_password(password_error_control as FormControl);
    });
    //confirmpassword
    const confirmpassword_error_control =
      this.forgotpasswordform.get('confirmpassword');
    confirmpassword_error_control?.valueChanges.subscribe((confirmpassword) => {
      this.validate_confirmpassword(
        confirmpassword_error_control as FormControl,
      );
    });
  }

  validate_username(username_error_control: FormControl): void {
    this.username_error_message = ' ';
    this.username_error_alert_msg = false;
    if (
      username_error_control.invalid &&
      (username_error_control.touched || username_error_control.dirty)
    ) {
      this.username_error_alert_msg = true;
      if (username_error_control.errors?.['required']) {
        this.username_error_message = 'Username is required';
      }
      if (username_error_control.errors?.['pattern']) {
        this.username_error_message = 'Username pattern is not valid ';
      }
    }
  }

  validate_email(email_error_control: FormControl): void {
    this.email_error_message = ' ';
    this.email_error_alert_msg = false;
    if (
      email_error_control.invalid &&
      (email_error_control.touched || email_error_control.dirty)
    ) {
      this.email_error_alert_msg = true;
      if (email_error_control.errors?.['required']) {
        this.email_error_message = 'Email is required';
      }
      if (email_error_control.errors?.['pattern']) {
        this.email_error_message = 'Email is not valid';
      }
    }
  }

  validate_password(password_error_control: FormControl): void {
    this.password_error_message = ' ';
    this.password_error_alert_msg = false;
    if (
      password_error_control.invalid &&
      (password_error_control.touched || password_error_control.dirty)
    ) {
      this.password_error_alert_msg = true;
      if (password_error_control.errors?.['required']) {
        this.password_error_message = 'Password is required';
      }
      if (password_error_control.errors?.['minlength']) {
        this.password_error_message = 'Password must be at least 8 characters';
      }
      if (password_error_control.errors?.['maxlength']) {
        this.password_error_message = 'Password must be at most 32 characters';
      }
    }
  }

  validate_confirmpassword(confirmpassword_error_control: FormControl): void {
    this.confirmpassword_error_message = ' ';
    this.confirmpassword_error_alert_msg = false;
    if (
      confirmpassword_error_control.invalid &&
      (confirmpassword_error_control.touched ||
        confirmpassword_error_control.dirty)
    ) {
      this.confirmpassword_error_alert_msg = true;
      if (confirmpassword_error_control.errors?.['required']) {
        this.confirmpassword_error_message = 'Confirm your password';
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
    return (formgroup: FormGroup) => {
      const passwordcontrol = formgroup.controls?.[password];
      const confirmpasswordcontrol = formgroup.controls?.[confirmpassword];
      if (
        confirmpasswordcontrol.errors &&
        !confirmpasswordcontrol.errors?.['Mustmatch']
      ) {
        return;
      }
      if (passwordcontrol.value !== confirmpasswordcontrol.value) {
        confirmpasswordcontrol.setErrors({ Mustmatch: true });
      } else {
        confirmpasswordcontrol.setErrors(null);
      }
    };
  }

  registered() {
    console.log(this.forgotpasswordform.value, this.forgotpasswordform.invalid);
    this.forgotpasswordform.reset();
  }
}
