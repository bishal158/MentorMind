import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  faBriefcase,
  faCircleCheck,
  faEnvelope,
  faEye,
  faEyeSlash,
  faIdCard,
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
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent implements OnInit {
  show_field: boolean = false;
  role_options: any[] = [
    {
      value: 1,
      options: 'Student',
    },
    {
      value: 2,
      options: 'Student-Mentor',
    },
  ];
  subject_options: any[] = [
    {
      value: 1,
      name: 'DBMS',
    },
    {
      value: 2,
      name: 'OS',
    },
    {
      value: 3,
      name: 'Cyber Security',
    },
  ];
  // Font Awesome Icon
  fakey = faKey;
  faEnvelope = faEnvelope;
  faEyeSlash = faEyeSlash;
  faEye = faEye;
  faUser = faUser;
  faIdCard = faIdCard;
  faBriefcase = faBriefcase;
  // error message variables
  fullname_error_message: string | undefined;
  username_error_message: string | undefined;
  studentid_error_message: string | undefined;
  email_error_message: string | undefined;
  role_error_message: string | undefined;
  password_error_message: string | undefined;
  confirmpassword_error_message: string | undefined;
  profile_picture_error_message: string | undefined;
  subject_error_message: string | undefined;
  about_error_message: string | undefined;
  about_limit = 220;
  //for password visibility
  password_visiable: boolean = true;
  password_changetype: boolean = true;
  //for confirm password visibility
  confirm_password_visiable: boolean = true;
  confirm_password_changetype: boolean = true;
  /*username,email,studentid,password and confirm password validation and regex */
  fullname_regex =
    /(^[A-Za-z]{3,16})([ ]{0,1})([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})/;
  email_regex =
    /^(?=.{1,254}$)(?=.{1,64}@)[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+(\.[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+)*@[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?(\.[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?)*$/;
  studentid_regex = /^\d{9}$/;
  //registrationform control
  username_regex = /^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/;
  //RegisterForm builder
  registrationForm: FormGroup = this.formbuilder.group(
    {
      fullname: [
        '',
        [Validators.required, Validators.pattern(this.fullname_regex)],
      ],
      username: [
        '',
        [Validators.required, Validators.pattern(this.username_regex)],
      ],
      profile_picture: ['', [Validators.required]],
      studentid: [
        '',
        [
          Validators.required,
          Validators.maxLength(9),
          Validators.pattern(this.studentid_regex),
        ],
      ],
      email: [
        '',
        [
          Validators.required,
          Validators.email,
          Validators.pattern(this.email_regex),
        ],
      ],
      role: ['', [Validators.required]],
      password: [
        '',
        [
          Validators.required,
          Validators.maxLength(32),
          Validators.minLength(8),
        ],
      ],

      subject: [''],
      about: [
        '',
        [Validators.required, Validators.maxLength(this.about_limit)],
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
  //fullname
  fullname_error_alert_msg: boolean | undefined;
  //username
  username_error_alert_msg: boolean | undefined;
  //studentid
  studentid_error_alert_msg: boolean | undefined;
  //email
  email_error_alert_msg: boolean | undefined;
  //role
  role_error_alert_msg: boolean | undefined;
  //password
  password_error_alert_msg: boolean | undefined;
  //confirmpassword
  confirmpassword_error_alert_msg: boolean | undefined;
  // profile_picture
  profile_picture_error_alert_msg: boolean | undefined;
  // subject
  subject_error_alert_msg: boolean | undefined;
  // about
  about_error_alert_msg: boolean | undefined;
  /*Condition for username,studentid,email,role,password,confirmpassword error msg */
  mismatch_error_alert_msg: boolean | undefined;
  mismatch_error_message: string | undefined;
  protected readonly faCircleCheck = faCircleCheck;

  //constructor for form builder
  constructor(
    private formbuilder: FormBuilder,
    private route: Router,
  ) {}

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
    return this.registrationForm.get(name);
  }

  // Success Massage modal after registration
  open_success_modal() {
    const modal = document.getElementById('myModal');
    if (modal != null) {
      modal.style.display = 'block';
    }
  }

  close_success_modal() {
    const modal = document.getElementById('myModal');
    if (modal != null) {
      modal.style.display = 'none';
    }
  }

  //oninit function
  ngOnInit(): void {
    //fullname
    const fullname_error_control = this.registrationForm.get('fullname');
    fullname_error_control?.valueChanges.subscribe((fullname) => {
      this.validate_fullname(fullname_error_control as FormControl);
    });
    //username
    const username_error_control = this.registrationForm.get('username');
    username_error_control?.valueChanges.subscribe((username) => {
      this.validate_username(username_error_control as FormControl);
    });
    //profile_picture
    const profile_picture_error_control =
      this.registrationForm.get('profile_picture');
    profile_picture_error_control?.valueChanges.subscribe((profile_picture) => {
      this.validate_profile_picture(
        profile_picture_error_control as FormControl,
      );
    });
    //studentid
    const studentid_error_control = this.registrationForm.get('studentid');
    studentid_error_control?.valueChanges.subscribe((studentid) => {
      this.validate_studentid(studentid_error_control as FormControl);
    });
    //email
    const email_error_control = this.registrationForm.get('email');
    email_error_control?.valueChanges.subscribe((email) => {
      this.validate_email(email_error_control as FormControl);
    });
    //role
    const role_error_control = this.registrationForm.get('role');
    role_error_control?.valueChanges.subscribe((role) => {
      // for show subject field if student-services-mentor is selected
      this.show_field = role === '2';
      this.validate_role(role_error_control as FormControl);
    });
    //subject
    const subject_error_control = this.registrationForm.get('subject');
    subject_error_control?.valueChanges.subscribe((subject) => {
      this.validate_subject(subject_error_control as FormControl);
    });
    // about
    const about_error_control = this.registrationForm.get('about');
    about_error_control?.valueChanges.subscribe((about) => {
      let about_counter: any | undefined;
      let about_textarea: any | undefined;
      let textLength: any | undefined;
      about_counter = document.getElementById('about_counter');
      let limit = this.about_limit;
      about_textarea = document.getElementById('about');
      about_counter.textContent = 0 + '/' + limit;
      about_textarea.addEventListener('input', function () {
        textLength = about_textarea.value.length;
        about_counter.textContent = textLength + '/' + limit;
        if (textLength > limit) {
          about_counter.style.color = 'red';
        } else {
          about_counter.style.color = 'black';
        }
      });

      this.validate_about(about_error_control as FormControl);
    });
    //password
    const password_error_control = this.registrationForm.get('password');
    password_error_control?.valueChanges.subscribe((password) => {
      this.validate_password(password_error_control as FormControl);
    });
    //confirmpassword
    const confirmpassword_error_control =
      this.registrationForm.get('confirmpassword');
    confirmpassword_error_control?.valueChanges.subscribe((confirmpassword) => {
      this.validate_confirmpassword(
        confirmpassword_error_control as FormControl,
      );
    });
  }

  validate_fullname(fullname_error_control: FormControl): void {
    this.fullname_error_message = ' ';
    this.fullname_error_alert_msg = false;
    if (
      fullname_error_control.invalid &&
      (fullname_error_control.touched || fullname_error_control.dirty)
    ) {
      this.fullname_error_alert_msg = true;
      if (fullname_error_control.errors?.['required']) {
        this.fullname_error_message = 'Fullname is required';
      }
      if (fullname_error_control.errors?.['pattern']) {
        this.fullname_error_message = 'Fullname pattern is not valid ';
      }
    }
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

  validate_studentid(studentid_error_control: FormControl): void {
    this.studentid_error_message = ' ';
    this.studentid_error_alert_msg = false;
    if (
      studentid_error_control.invalid &&
      (studentid_error_control.touched || studentid_error_control.dirty)
    ) {
      this.studentid_error_alert_msg = true;
      if (studentid_error_control.errors?.['required']) {
        this.studentid_error_message = 'Student id is required';
      }
      if (studentid_error_control.errors?.['pattern']) {
        this.studentid_error_message = 'Student id must be 9 digits';
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

  validate_role(role_error_control: FormControl): void {
    this.role_error_message = ' ';
    this.role_error_alert_msg = false;
    if (
      role_error_control.invalid &&
      (role_error_control.touched || role_error_control.dirty)
    ) {
      this.role_error_alert_msg = true;
    }
  }

  validate_subject(subject_error_control: FormControl): void {
    this.subject_error_message = ' ';
    this.subject_error_alert_msg = false;
    if (
      subject_error_control.invalid &&
      (subject_error_control.touched || subject_error_control.dirty)
    ) {
      this.subject_error_alert_msg = true;
    }
  }

  validate_about(about_error_control: FormControl): void {
    this.about_error_message = ' ';
    this.about_error_alert_msg = false;
    if (
      about_error_control.invalid &&
      (about_error_control.touched || about_error_control.dirty)
    ) {
      this.about_error_alert_msg = true;
      if (about_error_control.errors?.['required']) {
        this.about_error_message = 'About is required';
      }
      if (about_error_control.errors?.['maxlength']) {
        this.about_error_message = 'Maximum length is ' + this.about_limit;
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

  //password strength checker

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

  //match password
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
    console.log(this.registrationForm.value, this.registrationForm.invalid);
    this.registrationForm.reset();

    let counter: any | undefined;
    counter = document.getElementById('about_counter');
    let limit = this.about_limit;
    counter.textContent = 0 + '/' + limit;
  }
}
