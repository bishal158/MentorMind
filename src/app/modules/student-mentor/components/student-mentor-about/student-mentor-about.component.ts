import { Component } from '@angular/core';
import {
  faBuildingColumns,
  faBuildingUser,
  faCalendarDays,
  faCircleCheck,
  faCircleDown,
  faCircleInfo,
  faEnvelope,
  faFileArchive,
  faFileSignature,
  faImage,
  faLink,
  faMobile,
  faPenToSquare,
  faSchool,
  faSquarePollHorizontal,
  faStopwatch,
  faTrash,
  faUserGraduate,
  faUserTag,
} from '@fortawesome/free-solid-svg-icons';
import {
  faFacebook,
  faGithub,
  faLinkedin,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-student-mentor-about',
  templateUrl: './student-mentor-about.component.html',
  styleUrls: ['./student-mentor-about.component.css'],
})
export class StudentMentorAboutComponent {
  //font awesome icons
  faFacebook = faFacebook;
  faTwitter = faTwitter;
  faLinkedin = faLinkedin;
  faGithub = faGithub;
  faEnvelope = faEnvelope;
  //Rating
  max = 10;
  rate = 6;
  isReadonly = true;
  programme_name_error_message: string | undefined;
  institution_name_error_message: string | undefined;
  result_error_message: string | undefined;
  department_error_message: string | undefined;
  passing_year_error_message: string | undefined;
  update_educational_qualification_form: FormGroup = this.formbuilder.group({
    programme_name: ['', [Validators.required]],
    institution_name: ['', [Validators.required]],
    result: ['', [Validators.required]],
    department: ['', [Validators.required]],
    passing_year: ['', [Validators.required]],
  });
  //programme
  programme_name_error_alert_msg: boolean | undefined;
  //institution
  institution_name_error_alert_msg: boolean | undefined;
  //result
  result_error_alert_msg: boolean | undefined;
  //department
  department_error_alert_msg: boolean | undefined;
  //passing_year
  passing_year_error_alert_msg: boolean | undefined;
  title_error_message: string | undefined;
  project_or_thesis_error_message: string | undefined;
  publication_link_error_message: string | undefined;
  date_of_publication_error_message: string | undefined;
  publication_description_error_message: string | undefined;
  description_limit = 80;
  publication_link_regex =
    /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/gi;
  //Form builder
  update_publications_form: FormGroup = this.formbuilder.group({
    title: ['', [Validators.required]],
    project_or_thesis: ['', [Validators.required]],
    publication_link: [
      '',
      [Validators.required, Validators.pattern(this.publication_link_regex)],
    ],
    date_of_publication: ['', [Validators.required]],
    publication_description: [
      '',
      [Validators.required, Validators.maxLength(this.description_limit)],
    ],
  });
  //title
  title_error_alert_msg: boolean | undefined;
  //project_or_thesis
  project_or_thesis_error_alert_msg: boolean | undefined;
  //publication_link
  publication_link_error_alert_msg: boolean | undefined;
  //publication_date
  date_of_publication_error_alert_msg: boolean | undefined;
  publication_description_error_alert_msg: boolean | undefined;
  protected readonly faUserTag = faUserTag;
  protected readonly faImage = faImage;
  protected readonly faPenToSquare = faPenToSquare;
  protected readonly faTrash = faTrash;
  protected readonly faCircleCheck = faCircleCheck;
  protected readonly faUserGraduate = faUserGraduate;
  protected readonly faBuildingColumns = faBuildingColumns;
  protected readonly faSquarePollHorizontal = faSquarePollHorizontal;
  protected readonly faBuildingUser = faBuildingUser;
  protected readonly faCalendarDays = faCalendarDays;
  protected readonly faLink = faLink;
  protected readonly faFileSignature = faFileSignature;
  // updating publications ends
  protected readonly faCircleDown = faCircleDown;

  // updating educational qualifications ends
  protected readonly faFileArchive = faFileArchive;
  protected readonly faStopwatch = faStopwatch;
  protected readonly faSchool = faSchool;
  protected readonly faMobile = faMobile;
  protected readonly faCircleInfo = faCircleInfo;

  //constructor for form builder
  constructor(private formbuilder: FormBuilder) {}

  // confirmSelection(keyboardevent: KeyboardEvent) {
  //   if (keyboardevent.keyCode === 13 || keyboardevent.key === 'Enter') {
  //     this.isReadonly = true;
  //   }
  // }

  resetStars() {
    this.rate = 0;
    this.isReadonly = false;
  }

  //for updating educational qualifications
  open_update_educational_qualification_modal() {
    const modal = document.getElementById('update-educational-qualification');
    if (modal != null) {
      modal.style.display = 'block';
    }
  }

  close_update_educational_qualification_modal() {
    const modal = document.getElementById('update-educational-qualification');
    if (modal != null) {
      modal.style.display = 'none';
    }
  }

  //getcontrol function for input validation
  getControl_of_update_educational_qualification_form(
    name: any,
  ): AbstractControl | null {
    return this.update_educational_qualification_form.get(name);
  }

  //oninit function
  ngOnInit(): void {
    // for update educational qualification
    const programme_name_error_control =
      this.update_educational_qualification_form.get('programme_name');
    programme_name_error_control?.valueChanges.subscribe((programme_name) => {
      this.validate_programme_name(programme_name_error_control as FormControl);
    });
    const institution_name_error_control =
      this.update_educational_qualification_form.get('institution_name');
    institution_name_error_control?.valueChanges.subscribe(
      (institution_name) => {
        this.validate_institution_name(
          institution_name_error_control as FormControl,
        );
      },
    );
    const result_error_control =
      this.update_educational_qualification_form.get('result');
    result_error_control?.valueChanges.subscribe((institution_name) => {
      this.validate_result(result_error_control as FormControl);
    });
    const department_error_control =
      this.update_educational_qualification_form.get('department');
    department_error_control?.valueChanges.subscribe((department) => {
      this.validate_department(department_error_control as FormControl);
    });
    const passing_year_error_control =
      this.update_educational_qualification_form.get('passing_year');
    passing_year_error_control?.valueChanges.subscribe((passing_year) => {
      this.validate_passing_year(passing_year_error_control as FormControl);
    });
    // for updating publications
    const title_error_control = this.update_publications_form.get('title');
    title_error_control?.valueChanges.subscribe((title) => {
      this.validate_title(title_error_control as FormControl);
    });
    const project_or_thesis_error_control =
      this.update_publications_form.get('project_or_thesis');
    project_or_thesis_error_control?.valueChanges.subscribe(
      (project_or_thesis) => {
        this.validate_project_or_thesis(
          project_or_thesis_error_control as FormControl,
        );
      },
    );
    const publication_link_error_control =
      this.update_publications_form.get('publication_link');
    publication_link_error_control?.valueChanges.subscribe(
      (publication_link) => {
        this.validate_publication_link(
          publication_link_error_control as FormControl,
        );
      },
    );
    const date_of_publication_error_control = this.update_publications_form.get(
      'date_of_publication',
    );
    date_of_publication_error_control?.valueChanges.subscribe(
      (date_of_publication) => {
        this.validate_date_of_publication(
          date_of_publication_error_control as FormControl,
        );
      },
    );
    const publication_description_error_control =
      this.update_publications_form.get('publication_description');
    publication_description_error_control?.valueChanges.subscribe(
      (publication_description) => {
        this.validate_publication_description(
          publication_description_error_control as FormControl,
        );
      },
    );
    //Counter Validation for Publication Description
    let description_counter: any | undefined;
    let publication_description_textarea: any | undefined;
    let textLength: any | undefined;
    publication_description_textarea = document.getElementById(
      'publication_description',
    );
    description_counter = document.getElementById('description_counter');
    let limit = this.description_limit;
    description_counter.textContent = 0 + '/' + limit;
    publication_description_textarea.addEventListener('input', function () {
      textLength = publication_description_textarea.value.length;
      description_counter.textContent = textLength + '/' + limit;
    });
  }

  validate_programme_name(programme_name_error_control: FormControl): void {
    this.programme_name_error_message = ' ';
    this.programme_name_error_alert_msg = false;
    if (
      programme_name_error_control.invalid &&
      (programme_name_error_control.touched ||
        programme_name_error_control.dirty)
    ) {
      this.programme_name_error_alert_msg = true;
      if (programme_name_error_control.errors?.['required']) {
        this.programme_name_error_message = 'Programme name is required';
      }
    }
  }

  validate_institution_name(institution_name_error_control: FormControl): void {
    this.institution_name_error_message = ' ';
    this.institution_name_error_alert_msg = false;
    if (
      institution_name_error_control.invalid &&
      (institution_name_error_control.touched ||
        institution_name_error_control.dirty)
    ) {
      this.institution_name_error_alert_msg = true;
      if (institution_name_error_control.errors?.['required']) {
        this.institution_name_error_message = 'Institution name is required';
      }
    }
  }

  validate_result(result_error_control: FormControl): void {
    this.result_error_message = ' ';
    this.result_error_alert_msg = false;
    if (
      result_error_control.invalid &&
      (result_error_control.touched || result_error_control.dirty)
    ) {
      this.result_error_alert_msg = true;
      if (result_error_control.errors?.['required']) {
        this.result_error_message = 'Result is required';
      }
    }
  }

  validate_department(department_error_control: FormControl): void {
    this.department_error_message = ' ';
    this.department_error_alert_msg = false;
    if (
      department_error_control.invalid &&
      (department_error_control.touched || department_error_control.dirty)
    ) {
      this.department_error_alert_msg = true;
      if (department_error_control.errors?.['required']) {
        this.department_error_message = 'Department is required';
      }
    }
  }

  validate_passing_year(passing_year_error_control: FormControl): void {
    this.passing_year_error_message = ' ';
    this.passing_year_error_alert_msg = false;
    if (
      passing_year_error_control.invalid &&
      (passing_year_error_control.touched || passing_year_error_control.dirty)
    ) {
      this.passing_year_error_alert_msg = true;
      if (passing_year_error_control.errors?.['required']) {
        this.passing_year_error_message = 'Passing Year is required';
      }
      // if (passing_year_error_control.errors?.['pattern']){
      //   this.passing_year_error_message = 'Date format is not valid'
      // }
    }
  }

  update_educational_qualification() {
    console.log(
      this.update_educational_qualification_form.value,
      this.update_educational_qualification_form.invalid,
    );
    this.update_educational_qualification_form.reset();
  }

  // for updating publications
  open_update_publication_modal() {
    const modal = document.getElementById('update-publication');
    if (modal != null) {
      modal.style.display = 'block';
    }
  }

  close_update_publication_modal() {
    const modal = document.getElementById('update-publication');
    if (modal != null) {
      modal.style.display = 'none';
    }
  }

  //getcontrol function for input validation
  getControl_update_publication_form(name: any): AbstractControl | null {
    return this.update_publications_form.get(name);
  }

  validate_title(title_error_control: FormControl): void {
    this.title_error_message = ' ';
    this.title_error_alert_msg = false;
    if (
      title_error_control.invalid &&
      (title_error_control.touched || title_error_control.dirty)
    ) {
      this.title_error_alert_msg = true;
      if (title_error_control.errors?.['required']) {
        this.title_error_message = 'Title is required';
      }
    }
  }

  validate_project_or_thesis(
    project_or_thesis_error_control: FormControl,
  ): void {
    this.project_or_thesis_error_message = ' ';
    this.project_or_thesis_error_alert_msg = false;
    if (
      project_or_thesis_error_control.invalid &&
      (project_or_thesis_error_control.touched ||
        project_or_thesis_error_control.dirty)
    ) {
      this.project_or_thesis_error_alert_msg = true;
      if (project_or_thesis_error_control.errors?.['required']) {
        this.project_or_thesis_error_message = 'Project ot thesis is required';
      }
    }
  }

  validate_publication_link(publication_link_error_control: FormControl): void {
    this.publication_link_error_message = ' ';
    this.publication_link_error_alert_msg = false;
    if (
      publication_link_error_control.invalid &&
      (publication_link_error_control.touched ||
        publication_link_error_control.dirty)
    ) {
      this.publication_link_error_alert_msg = true;
      if (publication_link_error_control.errors?.['required']) {
        this.publication_link_error_message = 'Publication_link is required';
      }
      if (publication_link_error_control.errors?.['pattern']) {
        this.publication_link_error_message = 'Not a valid link';
      }
    }
  }

  validate_date_of_publication(
    date_of_publication_error_control: FormControl,
  ): void {
    this.date_of_publication_error_message = ' ';
    this.date_of_publication_error_alert_msg = false;
    if (
      date_of_publication_error_control.invalid &&
      (date_of_publication_error_control.touched ||
        date_of_publication_error_control.dirty)
    ) {
      this.date_of_publication_error_alert_msg = true;
      if (date_of_publication_error_control.errors?.['required']) {
        this.date_of_publication_error_message = 'Publication Date is required';
      }
      // if (passing_year_error_control.errors?.['pattern']){
      //   this.passing_year_error_message = 'Date format is not valid'
      // }
    }
  }

  validate_publication_description(
    publication_description_error_control: FormControl,
  ): void {
    this.publication_description_error_message = ' ';
    this.publication_description_error_alert_msg = false;
    if (
      publication_description_error_control.invalid &&
      (publication_description_error_control.touched ||
        publication_description_error_control.dirty)
    ) {
      this.publication_description_error_alert_msg = true;
      if (publication_description_error_control.errors?.['required']) {
        this.publication_description_error_message =
          'Publication description is required';
      }
      if (publication_description_error_control.errors?.['maxlength']) {
        this.publication_description_error_message =
          'Maximum characters limit is ' + this.description_limit;
      }
    }
  }

  update_publication_form() {
    console.log(
      this.update_publications_form.value,
      this.update_publications_form.invalid,
    );
    this.update_publications_form.reset();
  }
}
