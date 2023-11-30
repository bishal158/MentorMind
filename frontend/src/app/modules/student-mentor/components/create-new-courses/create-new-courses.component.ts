import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  faBuildingColumns,
  faBuildingUser,
  faCalendarDays,
  faCircleCheck,
  faEnvelope,
  faEye,
  faEyeSlash,
  faFolderPlus,
  faKey,
  faSquarePollHorizontal,
  faUserGraduate,
} from '@fortawesome/free-solid-svg-icons';
import {
  faFacebook,
  faGithub,
  faGoogle,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-create-new-courses',
  templateUrl: './create-new-courses.component.html',
  styleUrls: ['./create-new-courses.component.css'],
})
export class CreateNewCoursesComponent implements OnInit {
  protected readonly faEnvelope = faEnvelope;
  protected readonly faEye = faEye;
  protected readonly faFacebook = faFacebook;
  protected readonly faEyeSlash = faEyeSlash;
  protected readonly faLinkedin = faLinkedin;
  protected readonly faGithub = faGithub;
  protected readonly faBuildingColumns = faBuildingColumns;
  course_name_error_message: string | undefined;
  course_description_error_message: string | undefined;
  course_description_error_alert_msg: boolean | undefined;
  course_name_error_alert_msg: boolean | undefined;
  limit = 220;

  //constructor for form builder
  constructor(
    private formbuilder: FormBuilder,
    private router: Router,
  ) {}
  //educational_qualification_form control
  /*username,email,studentid,password and confirm password validation and regex */
  //programme_name_regex = /^(([A-Za-z]{1,5} ?){1,2}[A-Za-z]{2,})( University|College|School|Institute|Academy|University College|Polytechnic|Technical Institute|Vocational College)$/;
  //date_format = /(0?[1-9]|[12][0-9]|3[01])([ \/\-])(0?[1-9]|1[012])\2([0-9][0-9][0-9][0-9])(([ -])([0-1]?[0-9]|2[0-3]):[0-5]?[0-9]:[0-5]?[0-9])?/gim;
  //RegisterForm builder
  create_new_course_form: FormGroup = this.formbuilder.group({
    course_name: ['', [Validators.required]],
    course_description: [
      '',
      [Validators.required, Validators.maxLength(this.limit)],
    ],
  });
  //getcontrol function for input validation
  getControl(name: any): AbstractControl | null {
    return this.create_new_course_form.get(name);
  }
  //oninit function
  ngOnInit(): void {
    const course_name_error_control =
      this.create_new_course_form.get('course_name');
    course_name_error_control?.valueChanges.subscribe((course_name) => {
      this.validate_course_name(course_name_error_control as FormControl);
    });
    const course_description_error_control =
      this.create_new_course_form.get('course_description');
    course_description_error_control?.valueChanges.subscribe(
      (course_description) => {
        this.validate_course_description(
          course_description_error_control as FormControl,
        );
      },
    );
    //Counter validation for about
    let counter: any | undefined;
    let about_textarea: any | undefined;
    let textLength: any | undefined;
    about_textarea = document.getElementById('course_description');
    counter = document.getElementById('counter');
    let limit = this.limit;
    counter.textContent = 0 + '/' + limit;
    about_textarea.addEventListener('input', function () {
      textLength = about_textarea.value.length;
      counter.textContent = textLength + '/' + limit;
      if (textLength > limit) {
        counter.style.color = 'red';
      } else {
        counter.style.color = 'black';
      }
    });
  }

  validate_course_name(course_name_error_control: FormControl): void {
    this.course_name_error_message = ' ';
    this.course_name_error_alert_msg = false;
    if (
      course_name_error_control.invalid &&
      (course_name_error_control.touched || course_name_error_control.dirty)
    ) {
      this.course_name_error_alert_msg = true;
      if (course_name_error_control.errors?.['required']) {
        this.course_name_error_message = 'Course Name is required';
      }
    }
  }
  // course_description
  validate_course_description(
    course_description_error_control: FormControl,
  ): void {
    this.course_description_error_message = ' ';
    this.course_description_error_alert_msg = false;
    if (
      course_description_error_control.invalid &&
      (course_description_error_control.touched ||
        course_description_error_control.dirty)
    ) {
      this.course_description_error_alert_msg = true;
      if (course_description_error_control.errors?.['required']) {
        this.course_description_error_message =
          'Course description is required';
      }
      if (course_description_error_control.errors?.['maxlength']) {
        this.course_description_error_message =
          'Maximum length is ' + this.limit;
      }
    }
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
  go_to_your_course() {
    this.router.navigate(['student-mentor/all-your-courses']);
  }
  create_new_course() {
    console.log(
      this.create_new_course_form.value,
      this.create_new_course_form.invalid,
    );
    this.create_new_course_form.reset();
    // make counter 0 after saving
    let counter: any | undefined;
    counter = document.getElementById('counter');
    let limit = this.limit;
    counter.textContent = 0 + '/' + limit;
  }

  protected readonly faCircleCheck = faCircleCheck;
  protected readonly faFolderPlus = faFolderPlus;
}
