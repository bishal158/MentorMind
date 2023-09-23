import { Component } from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {
  faBuildingColumns,
  faBuildingUser,
  faSquarePollHorizontal,
  faUserGraduate,
  faCalendarDays,
} from "@fortawesome/free-solid-svg-icons";
@Component({
  selector: 'app-add-educational-qualification',
  templateUrl: './add-educational-qualification.component.html',
  styleUrls: ['./add-educational-qualification.component.css']
})
export class AddEducationalQualificationComponent {
  protected readonly faUserGraduate = faUserGraduate;
  protected readonly faBuildingColumns = faBuildingColumns;
  protected readonly faSquarePollHorizontal = faSquarePollHorizontal;
  protected readonly faBuildingUser = faBuildingUser;
  protected readonly faCalendarDays = faCalendarDays;
  programme_name_error_message: string | undefined;
  institution_name_error_message: string | undefined;
  result_error_message: string | undefined;
  department_error_message: string | undefined;
  passing_year_error_message: string | undefined;
  //constructor for form builder
  constructor(private formbuilder:FormBuilder){}
  //educational_qualification_form control
  /*username,email,studentid,password and confirm password validation and regex */
  //programme_name_regex = /^(([A-Za-z]{1,5} ?){1,2}[A-Za-z]{2,})( University|College|School|Institute|Academy|University College|Polytechnic|Technical Institute|Vocational College)$/;
  //date_format = /(0?[1-9]|[12][0-9]|3[01])([ \/\-])(0?[1-9]|1[012])\2([0-9][0-9][0-9][0-9])(([ -])([0-1]?[0-9]|2[0-3]):[0-5]?[0-9]:[0-5]?[0-9])?/gim;
  //RegisterForm builder
  educational_qualification_form:FormGroup = this.formbuilder.group({
      programme_name: ['',[Validators.required,]],
      institution_name: ['',[Validators.required,]],
      result:['',[Validators.required,]],
      department: ['',[Validators.required,]],
      passing_year: ['',[Validators.required,]],
    },
  );
  //getcontrol function for input validation
  getControl(name:any): AbstractControl | null{
    return this.educational_qualification_form.get(name);
  }
  //oninit function
  ngOnInit(): void {
    const programme_name_error_control = this.educational_qualification_form.get('programme_name');
    programme_name_error_control?.valueChanges.subscribe(programme_name=>{
      this.validate_programme_name(programme_name_error_control as FormControl);
    })
    const institution_name_error_control = this.educational_qualification_form.get('institution_name');
    institution_name_error_control?.valueChanges.subscribe(institution_name=>{
      this.validate_institution_name(institution_name_error_control as FormControl);
    })
    const result_error_control = this.educational_qualification_form.get('result');
    result_error_control?.valueChanges.subscribe(institution_name=>{
      this.validate_result(result_error_control as FormControl);
    })
    const department_error_control = this.educational_qualification_form.get('department');
    department_error_control?.valueChanges.subscribe(department=>{
      this.validate_department(department_error_control as FormControl);
    })
    const passing_year_error_control = this.educational_qualification_form.get('passing_year');
    passing_year_error_control?.valueChanges.subscribe(passing_year=>{
      this.validate_passing_year(passing_year_error_control as FormControl);
    })
  }
  //programme
  programme_name_error_alert_msg:boolean | undefined;
  validate_programme_name(programme_name_error_control:FormControl): void {
    this.programme_name_error_message = ' ';
    this.programme_name_error_alert_msg = false;
    if (programme_name_error_control.invalid && (programme_name_error_control.touched || programme_name_error_control.dirty)) {
      this.programme_name_error_alert_msg = true;
      if(programme_name_error_control.errors?.['required']){
        this.programme_name_error_message= 'Programme name is required';
      }
    }
  }
  //institution
  institution_name_error_alert_msg:boolean | undefined;
  validate_institution_name(institution_name_error_control:FormControl): void {
    this.institution_name_error_message = ' ';
    this.institution_name_error_alert_msg = false;
    if (institution_name_error_control.invalid && (institution_name_error_control.touched || institution_name_error_control.dirty)) {
      this.institution_name_error_alert_msg = true;
      if(institution_name_error_control.errors?.['required']){
        this.institution_name_error_message= 'Institution name is required';
      }
    }
  }
  //result
  result_error_alert_msg:boolean | undefined;
  validate_result(result_error_control:FormControl): void {
    this.result_error_message = ' ';
    this.result_error_alert_msg = false;
    if (result_error_control.invalid && (result_error_control.touched || result_error_control.dirty)) {
      this.result_error_alert_msg = true;
      if(result_error_control.errors?.['required']){
        this.result_error_message= 'Result is required';
      }
    }
  }

  //department
  department_error_alert_msg:boolean | undefined;
  validate_department(department_error_control:FormControl): void {
    this.department_error_message = ' ';
    this.department_error_alert_msg = false;
    if (department_error_control.invalid && (department_error_control.touched || department_error_control.dirty)) {
      this.department_error_alert_msg = true;
      if(department_error_control.errors?.['required']){
        this.department_error_message= 'Department is required';
      }
    }
  }

  //passing_year
  passing_year_error_alert_msg:boolean | undefined;
  validate_passing_year(passing_year_error_control:FormControl): void {
    this.passing_year_error_message = ' ';
    this.passing_year_error_alert_msg = false;
    if (passing_year_error_control.invalid && (passing_year_error_control.touched ||passing_year_error_control.dirty)) {
      this.passing_year_error_alert_msg = true;
      if(passing_year_error_control.errors?.['required']){
        this.passing_year_error_message= 'Passing Year is required';
      }
      // if (passing_year_error_control.errors?.['pattern']){
      //   this.passing_year_error_message = 'Date format is not valid'
      // }
    }
  }

  add(){
    console.log(this.educational_qualification_form.value,this.educational_qualification_form.invalid);
    this.educational_qualification_form.reset();
  }



}
