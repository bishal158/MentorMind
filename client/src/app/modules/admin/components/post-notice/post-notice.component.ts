import { Component, OnInit } from '@angular/core';
import {
  faBriefcase,
  faFile,
  faImage,
  faLink,
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

import { ToastrService } from 'ngx-toastr';
import tinymce from 'tinymce';
@Component({
  selector: 'app-post-notice',
  templateUrl: './post-notice.component.html',
  styleUrls: ['./post-notice.component.css'],
})
export class PostNoticeComponent implements OnInit {
  choose_options = [
    {
      value: 'yes',
      option: 'yes',
    },
    {
      value: 'no',
      option: 'no',
    },
  ];
  text_editor_tools = {
    plugins:
      'anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount  importcss save insertdatetime template  searchreplace',
    apiKey: '8et93yhx409rl6twkpkmbtw7bdjbn6sfohloaynw8q3ez5l9',
    base_url: '/tinymce',
    suffix: '.min',
    toolbar:
      'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media insertdatetime table mergetags | align lineheight | tinycomments | checklist numlist bullist indent outdent | emoticons charmap | removeformat | paste | save',
    skin: 'tinymce-5-dark',
    inline_styles: true,
  };
  notice_title_error_message: string | undefined;
  text_editor_error_message: string | undefined;
  notice_file_error_message: string | undefined;
  attachment_error_message: string | undefined;
  notice_title_regex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
  notice: FormGroup = this.formbuilder.group({
    notice_title: ['', [Validators.required, Validators.maxLength(100)]],
    text_editor: ['', [Validators.required]],
    notice_file: [''],
    attachment: ['', [Validators.required]],
  });
  //notice_title
  notice_title_error_alert_msg: boolean | undefined;
  // notice_file
  notice_file_error_alert_msg: boolean | undefined;
  //text_editor
  text_editor_error_alert_msg: boolean | undefined;
  attachment_error_alert_msg: boolean | undefined;

  protected readonly tinymce = tinymce;
  protected readonly faUser = faUser;
  protected readonly faImage = faImage;
  protected readonly faPenToSquare = faPenToSquare;
  protected readonly faFile = faFile;
  protected readonly faBriefcase = faBriefcase;
  protected readonly faLink = faLink;

  constructor(
    private formbuilder: FormBuilder,
    private toastr: ToastrService,
  ) {}

  getControl(name: any): AbstractControl | null {
    return this.notice.get(name);
  }

  ngOnInit(): void {
    //text_editor
    const text_editor_error_control = this.notice.get('text_editor');
    text_editor_error_control?.valueChanges.subscribe((text_editor) => {
      this.validate_text_editor(text_editor_error_control as FormControl);
    });
    //notice_title
    const notice_title_error_control = this.notice.get('notice_title');
    notice_title_error_control?.valueChanges.subscribe((notice_title) => {
      this.validate_notice_title(notice_title_error_control as FormControl);
    });
    //notice_file
    const notice_file_error_control = this.notice.get('notice_file');
    notice_file_error_control?.valueChanges.subscribe((notice_file) => {
      this.validate_notice_file(notice_file_error_control as FormControl);
    });
  }

  validate_notice_title(notice_title_error_control: FormControl): void {
    this.notice_title_error_message = ' ';
    this.notice_title_error_alert_msg = false;
    if (
      notice_title_error_control.invalid &&
      (notice_title_error_control.touched || notice_title_error_control.dirty)
    ) {
      this.notice_title_error_alert_msg = true;
      if (notice_title_error_control.errors?.['required']) {
        this.notice_title_error_message = 'Title is required';
      }
      if (notice_title_error_control.errors?.['maxlength']) {
        this.notice_title_error_message = 'Maximum length is 20';
      }
      if (notice_title_error_control.errors?.['pattern']) {
        this.notice_title_error_message = 'Title pattern is not valid ';
      }
    }
  }

  validate_notice_file(notice_file_error_control: FormControl): void {
    this.notice_file_error_message = ' ';
    this.notice_file_error_alert_msg = false;
    if (
      notice_file_error_control.invalid &&
      (notice_file_error_control.touched || notice_file_error_control.dirty)
    ) {
      this.notice_file_error_alert_msg = true;
      if (notice_file_error_control.errors?.['required']) {
        this.notice_file_error_message = 'You must provide a file';
      }
    }
  }

  validate_text_editor(text_editor_error_control: FormControl): void {
    this.text_editor_error_message = ' ';
    this.text_editor_error_alert_msg = false;
    if (
      text_editor_error_control.invalid &&
      (text_editor_error_control.touched || text_editor_error_control.dirty)
    ) {
      this.text_editor_error_alert_msg = true;
      if (text_editor_error_control.errors?.['required']) {
        this.text_editor_error_message = 'You have to write something';
      }
    }
  }

  submit(notice: any) {
    let html_content = tinymce.activeEditor?.getContent();
    this.notice.reset();
    tinymce.activeEditor?.setContent('Done');
    this.toastr.success('Notice Added Successfully');
    console.log(notice);
  }
}
