import { Component, OnInit } from '@angular/core';
import tinymce from 'tinymce';
import {
  faCirclePlus,
  faPenToSquare,
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
  selector: 'app-design-your-course',
  templateUrl: './design-your-course.component.html',
  styleUrls: ['./design-your-course.component.css'],
})
export class DesignYourCourseComponent implements OnInit {
  text_editor_tools = {
    plugins:
      'anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount  importcss save insertdatetime template  searchreplace',
    apiKey: '8et93yhx409rl6twkpkmbtw7bdjbn6sfohloaynw8q3ez5l9',
    base_url: '/tinymce',
    suffix: '.min',
    toolbar:
      'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media insertdatetime table mergetags | align lineheight | tinycomments | checklist numlist bullist indent outdent | emoticons charmap | removeformat | paste | save',
    skin: 'tinymce-5-dark',
  };

  protected readonly faUser = faUser;
  protected readonly faPenToSquare = faPenToSquare;

  topic_name_error_msg: string | undefined;
  topic_name_error_msg_alert: boolean | undefined;
  topic_content_error_msg: string | undefined;
  topic_content_error_msg_alert: boolean | undefined;
  constructor(private formBuilder: FormBuilder) {}
  ngOnInit(): void {
    //text_editor_content
    const topic_content_error_control =
      this.add_topic_form.get('topic_content');
    topic_content_error_control?.valueChanges.subscribe((topic_content) => {
      this.validate_topic_content(topic_content_error_control as FormControl);
    });
    //topic_name
    const topic_name_error_control = this.add_topic_form.get('topic_name');
    topic_name_error_control?.valueChanges.subscribe((topic_name) => {
      this.validate_topic_name(topic_name_error_control as FormControl);
    });
  }

  getControl(name: any): AbstractControl | null {
    return this.add_topic_form.get(name);
  }

  add_topic_form: FormGroup = this.formBuilder.group({
    topic_name: ['', [Validators.required, Validators.maxLength(100)]],
    topic_content: ['', [Validators.required]],
  });

  // topic_name
  validate_topic_name(topic_name_error_control: FormControl) {
    this.topic_name_error_msg = ' ';
    this.topic_name_error_msg_alert = false;
    if (
      topic_name_error_control.invalid &&
      (topic_name_error_control.touched || topic_name_error_control.dirty)
    ) {
      this.topic_name_error_msg_alert = true;
      if (topic_name_error_control.errors?.['required']) {
        this.topic_name_error_msg = 'Topic name is required';
      }
      if (topic_name_error_control.errors?.['pattern']) {
        this.topic_name_error_msg = 'Topic pattern is not valid ';
      }
    }
  }

  // topic_content
  validate_topic_content(topic_content_error_control: FormControl) {
    this.topic_content_error_msg = ' ';
    this.topic_content_error_msg_alert = false;
    if (
      topic_content_error_control.invalid &&
      (topic_content_error_control.touched || topic_content_error_control.dirty)
    ) {
      this.topic_content_error_msg_alert = true;
      if (topic_content_error_control.errors?.['required']) {
        this.topic_content_error_msg = 'Topic content is required';
      }
    }
  }

  submit(add_topic_form: any) {
    this.add_topic_form.reset();
    tinymce.activeEditor?.setContent('Done');
    console.log(add_topic_form);
  }

  protected readonly faCirclePlus = faCirclePlus;
}
