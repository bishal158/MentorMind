import { Component } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { faUserTag } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-share-resources-form',
  templateUrl: './share-resources-form.component.html',
  styleUrls: ['./share-resources-form.component.css'],
})
export class ShareResourcesFormComponent {
  topic_error_message: string | undefined;
  resource_description_error_message: string | undefined;
  description_limit = 80;
  //Form builder
  share_resources_form: FormGroup = this.formbuilder.group({
    topic: ['', [Validators.required]],
    resource_description: [
      '',
      [Validators.required, Validators.maxLength(this.description_limit)],
    ],
  });
  //title
  topic_error_alert_msg: boolean | undefined;
  //educational_qualification_form control
  /*username,email,studentid,password and confirm password validation and regex */
  resource_description_error_alert_msg: boolean | undefined;
  protected readonly faUserTag = faUserTag;

  //constructor for form builder
  constructor(private formbuilder: FormBuilder) {}

  //getcontrol function for input validation
  getControl(name: any): AbstractControl | null {
    return this.share_resources_form.get(name);
  }

  //oninit function
  ngOnInit(): void {
    const topic_error_control = this.share_resources_form.get('topic');
    topic_error_control?.valueChanges.subscribe((topic) => {
      this.validate_topic(topic_error_control as FormControl);
    });

    const resource_description_error_control = this.share_resources_form.get(
      'resource_description',
    );
    resource_description_error_control?.valueChanges.subscribe(
      (resource_description) => {
        this.validate_resource_description(
          resource_description_error_control as FormControl,
        );
      },
    );
    //Counter Validation for Publication Description
    let description_counter: any | undefined;
    let resource_description_textarea: any | undefined;
    let textLength: any | undefined;
    resource_description_textarea = document.getElementById(
      'resource_description',
    );
    description_counter = document.getElementById('description_counter');
    let limit = this.description_limit;
    description_counter.textContent = 0 + '/' + limit;
    resource_description_textarea.addEventListener('input', function () {
      textLength = resource_description_textarea.value.length;
      description_counter.textContent = textLength + '/' + limit;
      if (textLength > limit) {
        description_counter.style.color = 'red';
      } else {
        description_counter.style.color = 'black';
      }
    });
  }

  validate_topic(topic_error_control: FormControl): void {
    this.topic_error_message = ' ';
    this.topic_error_alert_msg = false;
    if (
      topic_error_control.invalid &&
      (topic_error_control.touched || topic_error_control.dirty)
    ) {
      this.topic_error_alert_msg = true;
      if (topic_error_control.errors?.['required']) {
        this.topic_error_message = 'Topic is required';
      }
    }
  }

  validate_resource_description(
    resource_description_error_control: FormControl,
  ): void {
    this.resource_description_error_message = ' ';
    this.resource_description_error_alert_msg = false;
    if (
      resource_description_error_control.invalid &&
      (resource_description_error_control.touched ||
        resource_description_error_control.dirty)
    ) {
      this.resource_description_error_alert_msg = true;
      if (resource_description_error_control.errors?.['required']) {
        this.resource_description_error_message =
          'Resource description is required';
      }
      if (resource_description_error_control.errors?.['maxlength']) {
        this.resource_description_error_message =
          'Maximum characters limit is ' + this.description_limit;
      }
    }
  }

  add() {
    console.log(
      this.share_resources_form.value,
      this.share_resources_form.invalid,
    );
    this.share_resources_form.reset();
    let share_resources_description_counter: any | undefined;
    share_resources_description_counter = document.getElementById(
      'description_counter',
    );
    let limit = this.description_limit;
    share_resources_description_counter.textContent = 0 + '/' + limit;
  }
}
