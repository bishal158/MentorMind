import { Component } from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {
  faCalendarDays,
  faLink,
  faFileSignature,
  faUserTag,
} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-add-thesis-project',
  templateUrl: './add-thesis-project.component.html',
  styleUrls: ['./add-thesis-project.component.css']
})
export class AddThesisProjectComponent {
  //calendar: NgbDateStruct | undefined;
  protected readonly faLink = faLink;
  protected readonly faFileSignature = faFileSignature;
  protected readonly faUserTag = faUserTag;
  protected readonly faCalendarDays = faCalendarDays;

  title_error_message: string | undefined;
  project_or_thesis_error_message: string | undefined;
  publication_link_error_message: string | undefined;
  date_of_publication_error_message: string | undefined;
  publication_description_error_message: string | undefined;
  description_limit = 80;
  //constructor for form builder
  constructor(private formbuilder:FormBuilder){}
  //educational_qualification_form control
  /*username,email,studentid,password and confirm password validation and regex */
  //programme_name_regex = /^(([A-Za-z]{1,5} ?){1,2}[A-Za-z]{2,})( University|College|School|Institute|Academy|University College|Polytechnic|Technical Institute|Vocational College)$/;
  //date_format_regex= /(0?[1-9]|[12][0-9]|3[01])([ \/\-])(0?[1-9]|1[012])\2([0-9][0-9][0-9][0-9])(([ -])([0-1]?[0-9]|2[0-3]):[0-5]?[0-9]:[0-5]?[0-9])?/gim;
  publication_link_regex = /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/ig
  //Form builder
  publications_form:FormGroup = this.formbuilder.group({
      title: ['',[Validators.required,]],
      project_or_thesis: ['',[Validators.required,]],
      publication_link:['',[Validators.required,Validators.pattern(this.publication_link_regex)]],
      date_of_publication: ['',[Validators.required,]],
      publication_description: ['',[Validators.required,Validators.maxLength(this.description_limit)]],
    },
  );
  //getcontrol function for input validation
  getControl(name:any): AbstractControl | null{
    return this.publications_form.get(name);
  }
  //oninit function
  ngOnInit(): void {
    const title_error_control = this.publications_form.get('title');
    title_error_control?.valueChanges.subscribe(title=>{
      this.validate_title(title_error_control as FormControl);
    })
    const project_or_thesis_error_control = this.publications_form.get('project_or_thesis');
    project_or_thesis_error_control?.valueChanges.subscribe(project_or_thesis=>{
      this.validate_project_or_thesis(project_or_thesis_error_control as FormControl);
    })
    const publication_link_error_control = this.publications_form.get('publication_link');
    publication_link_error_control?.valueChanges.subscribe(publication_link=>{
      this.validate_publication_link(publication_link_error_control as FormControl);
    })
    const date_of_publication_error_control = this.publications_form.get('date_of_publication');
    date_of_publication_error_control?.valueChanges.subscribe(date_of_publication=>{
      this.validate_date_of_publication(date_of_publication_error_control as FormControl);
    })
    const publication_description_error_control = this.publications_form.get('publication_description');
    publication_description_error_control?.valueChanges.subscribe(publication_description=>{
      this.validate_publication_description(publication_description_error_control as FormControl);
    })
    //Counter Validation for Publication Description
    let description_counter: any | undefined;
    let publication_description_textarea:any | undefined;
    let textLength:any | undefined;
    publication_description_textarea = document.getElementById('publication_description');
    description_counter = document.getElementById('description_counter');
    let limit = this.description_limit;
    description_counter.textContent  = 0+"/"+limit;
    publication_description_textarea.addEventListener("input",function (){
      textLength = publication_description_textarea.value.length;
      description_counter.textContent = textLength + "/" +limit;
    })
  }
  //title
  title_error_alert_msg:boolean | undefined;
  validate_title(title_error_control:FormControl): void {
    this.title_error_message = ' ';
    this.title_error_alert_msg = false;
    if (title_error_control.invalid && (title_error_control.touched || title_error_control.dirty)) {
      this.title_error_alert_msg = true;
      if(title_error_control.errors?.['required']){
        this.title_error_message= 'Title is required';
      }
    }
  }
  //project_or_thesis
  project_or_thesis_error_alert_msg:boolean | undefined;
  validate_project_or_thesis(project_or_thesis_error_control:FormControl): void {
    this.project_or_thesis_error_message = ' ';
    this.project_or_thesis_error_alert_msg = false;
    if (project_or_thesis_error_control.invalid && (project_or_thesis_error_control.touched || project_or_thesis_error_control.dirty)) {
      this.project_or_thesis_error_alert_msg = true;
      if(project_or_thesis_error_control.errors?.['required']){
        this.project_or_thesis_error_message= 'Project ot thesis is required';
      }
    }
  }
  //publication_link
  publication_link_error_alert_msg:boolean | undefined;
  validate_publication_link(publication_link_error_control:FormControl): void {
    this.publication_link_error_message = ' ';
    this.publication_link_error_alert_msg = false;
    if (publication_link_error_control.invalid && (publication_link_error_control.touched || publication_link_error_control.dirty)) {
      this.publication_link_error_alert_msg = true;
      if(publication_link_error_control.errors?.['required']){
        this.publication_link_error_message= 'Publication_link is required';
      }
      if (publication_link_error_control.errors?.['pattern']){
        this.publication_link_error_message = 'Not a valid link'
      }
    }
  }
  //publication_date
  date_of_publication_error_alert_msg:boolean | undefined;
  validate_date_of_publication(date_of_publication_error_control:FormControl): void {
    this.date_of_publication_error_message = ' ';
    this.date_of_publication_error_alert_msg = false;
    if (date_of_publication_error_control.invalid && (date_of_publication_error_control.touched ||date_of_publication_error_control.dirty)) {
      this.date_of_publication_error_alert_msg = true;
      if(date_of_publication_error_control.errors?.['required']){
        this.date_of_publication_error_message= 'Publication Date is required';
      }
      // if (passing_year_error_control.errors?.['pattern']){
      //   this.passing_year_error_message = 'Date format is not valid'
      // }
    }
  }

  publication_description_error_alert_msg:boolean | undefined;
  validate_publication_description(publication_description_error_control:FormControl): void {
    this.publication_description_error_message = ' ';
    this.publication_description_error_alert_msg = false;
    if (publication_description_error_control.invalid && (publication_description_error_control.touched ||publication_description_error_control.dirty)) {
      this.publication_description_error_alert_msg = true;
      if(publication_description_error_control.errors?.['required']){
        this.publication_description_error_message= 'Publication description is required';
      }
      if (publication_description_error_control.errors?.['maxlength']){
        this.publication_description_error_message = 'Maximum characters limit is ' + this.description_limit
      }
    }
  }

  add(){
    console.log(this.publications_form.value,this.publications_form.invalid);
    this.publications_form.reset();
  }
}
