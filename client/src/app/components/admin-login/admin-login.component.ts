import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { user } from '../../constants/constants';
import {
  faEnvelope,
  faEye,
  faEyeSlash,
  faKey,
} from '@fortawesome/free-solid-svg-icons';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css'],
})
export class AdminLoginComponent implements OnInit {
  // Font Awesome Icon variable
  fakey = faKey;
  faEnvelope = faEnvelope;
  faEyeSlash = faEyeSlash;
  faEye = faEye;
  // error message variable
  email_error_message: string | undefined;
  password_error_message: string | undefined;
  //password visiable logic
  visiable: boolean = true;
  changetype: boolean = true;
  //email ReGex for email validation
  email_regex =
    /^(?=.{1,254}$)(?=.{1,64}@)[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+(\.[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+)*@[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?(\.[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?)*$/;
  //loginform builder
  loginForm: FormGroup = this.formbuilder.group({
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
      [Validators.required, Validators.maxLength(32), Validators.minLength(8)],
    ],
  });

  //loginform control
  //condition for email error msg
  email_error_alert_msg: boolean | undefined;
  //condition for password error msg
  password_error_alert_msg: boolean | undefined;

  //constructor for formbuilder
  constructor(
    private formbuilder: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private authService: AuthService,
  ) {}

  view() {
    this.visiable = !this.visiable;
    this.changetype = !this.changetype;
  }

  getControl(name: any): AbstractControl | null {
    return this.loginForm.get(name);
  }

  // oninit function
  ngOnInit(): void {
    // email error
    const email_error_control = this.loginForm.get('email');
    email_error_control?.valueChanges.subscribe((email) => {
      this.validate_email(email_error_control as FormControl);
    });
    // password error
    const password_error_control = this.loginForm.get('password');
    password_error_control?.valueChanges.subscribe((password) => {
      this.validate_password(password_error_control as FormControl);
    });
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
      if (email_error_control.errors?.['email']) {
        this.email_error_message = 'Email is not valid';
      }
      if (email_error_control.errors?.['pattern']) {
        this.email_error_message = 'Email pattern is not valid';
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

  showSuccess() {
    this.toastr.success('Successful', 'Admin login', {
      timeOut: 3000,
      positionClass: 'toast-top-right',
      titleClass: 'toast-title',
    });
  }
  showError(message: string) {
    this.toastr.error(message, 'Admin login', {
      timeOut: 3000,
      positionClass: 'toast-top-right',
      titleClass: 'toast-title',
    });
  }

  logged_in(userForm: any) {
    this.authService.login_admin(userForm).subscribe({
      next: (res) => {
        localStorage.setItem(user, JSON.stringify(res));
        this.loginForm.reset();
      },
      error: (err) => {
        // console.log(err.error.message);
        this.showError(err.error.message);
      },
      complete: () => {
        this.router
          .navigate(['/admin/dashboard'])
          .then(() => this.showSuccess());
      },
    });
  }
}
