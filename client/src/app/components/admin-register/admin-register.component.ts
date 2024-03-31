import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import {
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
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-admin-register',
  templateUrl: './admin-register.component.html',
  styleUrls: ['./admin-register.component.css'],
})
export class AdminRegisterComponent implements OnInit {
  // Font Awesome Icon variable
  fakey = faKey;
  faEnvelope = faEnvelope;
  faEyeSlash = faEyeSlash;
  faEye = faEye;
  faUser = faUser;
  // error message variable
  name_error_message: string | undefined;
  email_error_message: string | undefined;
  password_error_message: string | undefined;
  confirmpassword_error_message: string | undefined;
  profile_picture_error_message: string | undefined;
  //password visiable logic
  password_visiable: boolean = true;
  password_changetype: boolean = true;
  confirm_password_visiable: boolean = true;
  confirm_password_changetype: boolean = true;
  //email ReGex for email validation
  email_regex =
    /^(?=.{1,254}$)(?=.{1,64}@)[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+(\.[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+)*@[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?(\.[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?)*$/;
  //loginform builder
  registerForm: FormGroup = this.formbuilder.group(
    {
      name: ['', Validators.required],
      email: [
        '',
        [
          Validators.required,
          Validators.email,
          Validators.pattern(this.email_regex),
        ],
      ],
      profile_picture: ['', [Validators.required]],
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
  //loginform control
  email_error_alert_msg: boolean | undefined;
  password_error_alert_msg: boolean | undefined;
  name_error_alert_msg: boolean | undefined;
  profile_picture_error_alert_msg: boolean | undefined;
  confirmpassword_error_alert_msg: boolean | undefined;
  mismatch_error_alert_msg: boolean | undefined;
  mismatch_error_message: string | undefined;
  //constructor for formbuilder
  constructor(
    private formbuilder: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private authService: AuthService,
  ) {}

  view1() {
    this.password_visiable = !this.password_visiable;
    this.password_changetype = !this.password_changetype;
  }
  view2() {
    this.confirm_password_visiable = !this.confirm_password_visiable;
    this.confirm_password_changetype = !this.confirm_password_changetype;
  }
  getControl(name: any): AbstractControl | null {
    return this.registerForm.get(name);
  }

  // oninit function
  ngOnInit(): void {
    // name error
    const name_error_control = this.registerForm.get('name');
    name_error_control?.valueChanges.subscribe((name) => {
      this.validate_name(name_error_control as FormControl);
    });
    // email error
    const email_error_control = this.registerForm.get('email');
    email_error_control?.valueChanges.subscribe((email) => {
      this.validate_email(email_error_control as FormControl);
    });
    //profile_picture
    const profile_picture_error_control =
      this.registerForm.get('profile_picture');
    profile_picture_error_control?.valueChanges.subscribe((profile_picture) => {
      this.validate_profile_picture(
        profile_picture_error_control as FormControl,
      );
    });
    // password error
    const password_error_control = this.registerForm.get('password');
    password_error_control?.valueChanges.subscribe((password) => {
      this.validate_password(password_error_control as FormControl);
    });
  }

  validate_name(name_error_control: FormControl): void {
    this.name_error_message = ' ';
    this.name_error_alert_msg = false;
    if (
      name_error_control.invalid &&
      (name_error_control.touched || name_error_control.dirty)
    ) {
      this.name_error_alert_msg = true;
      if (name_error_control.errors?.['required']) {
        this.name_error_message = 'Name is required';
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
      if (email_error_control.errors?.['email']) {
        this.email_error_message = 'Email is not valid';
      }
      if (email_error_control.errors?.['pattern']) {
        this.email_error_message = 'Email pattern is not valid';
      }
    }
  }
  validate_profile_picture(profile_picture_error_control: FormControl): void {
    this.profile_picture_error_message = ' ';
    this.profile_picture_error_alert_msg = false;
    if (
      profile_picture_error_control.invalid &&
      (profile_picture_error_control.touched ||
        profile_picture_error_control.dirty)
    ) {
      this.profile_picture_error_alert_msg = true;
      if (profile_picture_error_control.errors?.['required']) {
        this.profile_picture_error_message = 'Profile picture is required';
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
    this.mismatch_error_alert_msg = false;
    this.mismatch_error_message = ' ';
    if (
      confirmpassword_error_control.invalid &&
      (confirmpassword_error_control.touched ||
        confirmpassword_error_control.dirty)
    ) {
      this.confirmpassword_error_alert_msg = true;
      this.mismatch_error_alert_msg = true;
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

  showSuccess() {
    this.toastr.success('Successful', 'Admin Register!', {
      timeOut: 3000,
      positionClass: 'toast-top-right',
      titleClass: 'toast-title',
    });
  }
  showError(message: any) {
    this.toastr.error(message, 'Admin Register!', {
      timeOut: 3000,
      positionClass: 'toast-top-right',
      titleClass: 'toast-title',
    });
  }
  // file upload
  profile_picture: any | undefined;
  file(event: any) {
    this.profile_picture = <File>event.target.files[0];
  }
  registered(user: any) {
    const formData = new FormData();
    formData.append('name', user.name);
    formData.append('email', user.email);
    formData.append('password', user.password);
    formData.append('profile_picture', this.profile_picture);
    this.authService.save_admin(formData).subscribe({
      next: (res) => {
        console.log(res);
        this.registerForm.reset();
      },
      error: (e) => {
        this.showError(e.error.error);
      },
      complete: () =>
        this.router.navigate(['/login/admin']).then(() => this.showSuccess()),
    });
  }
}
