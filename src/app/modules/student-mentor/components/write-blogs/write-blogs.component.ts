import { Component, OnInit } from '@angular/core';
import tinymce from 'tinymce';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import {
  faImage,
  faPenToSquare,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import { BlogsService } from '../../../../services/student-mentor-services/blogs.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-write-blogs',
  templateUrl: './write-blogs.component.html',
  styleUrls: ['./write-blogs.component.css'],
})
export class WriteBlogsComponent implements OnInit {
  blog_title_error_message: string | undefined;
  text_editor_error_message: string | undefined;
  blog_cover_image_error_message: string | undefined;
  blog_description_error_message: string | undefined;
  min_limit = 300;
  limit = 600;
  blog_title_regex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
  write_blogs_form: FormGroup = this.formbuilder.group({
    blog_title: [
      '',
      [
        Validators.required,
        Validators.maxLength(100),
        Validators.pattern(this.blog_title_regex),
      ],
    ],
    text_editor: ['', [Validators.required]],
    blog_cover_image: ['', [Validators.required]],
    blog_description: [
      '',
      [
        Validators.required,
        Validators.maxLength(this.limit),
        Validators.minLength(this.min_limit),
      ],
    ],
  });
  //blog_title
  blog_title_error_alert_msg: boolean | undefined;
  //blog_description
  blog_description_error_alert_msg: boolean | undefined;
  // blog_cover_image
  blog_cover_image_error_alert_msg: boolean | undefined;
  //text_editor
  text_editor_error_alert_msg: boolean | undefined;
  blog = this.write_blogs_form.value;
  protected readonly tinymce = tinymce;
  protected readonly faUser = faUser;
  protected readonly faImage = faImage;
  protected readonly faPenToSquare = faPenToSquare;

  constructor(
    private formbuilder: FormBuilder,
    private blogService: BlogsService,
    private toastr: ToastrService,
  ) {}

  getControl(name: any): AbstractControl | null {
    return this.write_blogs_form.get(name);
  }

  ngOnInit(): void {
    //text_editor
    const text_editor_error_control = this.write_blogs_form.get('text_editor');
    text_editor_error_control?.valueChanges.subscribe((text_editor) => {
      this.validate_text_editor(text_editor_error_control as FormControl);
    });
    //blog_title
    const blog_title_error_control = this.write_blogs_form.get('blog_title');
    blog_title_error_control?.valueChanges.subscribe((blog_title) => {
      this.validate_blog_title(blog_title_error_control as FormControl);
    });
    //blog_cover_image
    const blog_cover_image_error_control =
      this.write_blogs_form.get('blog_cover_image');
    blog_cover_image_error_control?.valueChanges.subscribe(
      (blog_cover_image) => {
        this.validate_blog_cover_image(
          blog_cover_image_error_control as FormControl,
        );
      },
    );
    //blog_description
    const blog_description_error_control =
      this.write_blogs_form.get('blog_description');
    blog_description_error_control?.valueChanges.subscribe(
      (blog_description) => {
        this.validate_blog_description(
          blog_description_error_control as FormControl,
        );
      },
    );
    //Counter validation for about
    let description_counter: any | undefined;
    let blog_description_textarea: any | undefined;
    let textLength: any | undefined;
    blog_description_textarea = document.getElementById('blog_description');
    description_counter = document.getElementById('description_counter');
    let limit = this.limit;
    description_counter.textContent = 0 + '/' + limit;
    blog_description_textarea.addEventListener('input', function () {
      textLength = blog_description_textarea.value.length;
      description_counter.textContent = textLength + '/' + limit;
      if (textLength > limit) {
        description_counter.style.color = 'red';
      } else {
        description_counter.style.color = 'black';
      }
    });
  }

  validate_blog_title(blog_title_error_control: FormControl): void {
    this.blog_title_error_message = ' ';
    this.blog_title_error_alert_msg = false;
    if (
      blog_title_error_control.invalid &&
      (blog_title_error_control.touched || blog_title_error_control.dirty)
    ) {
      this.blog_title_error_alert_msg = true;
      if (blog_title_error_control.errors?.['required']) {
        this.blog_title_error_message = 'Title is required';
      }
      if (blog_title_error_control.errors?.['maxlength']) {
        this.blog_title_error_message = 'Maximum length is 20';
      }
      if (blog_title_error_control.errors?.['pattern']) {
        this.blog_title_error_message = 'Title pattern is not valid ';
      }
    }
  }

  validate_blog_cover_image(blog_cover_image_error_control: FormControl): void {
    this.blog_cover_image_error_message = ' ';
    this.blog_cover_image_error_alert_msg = false;
    if (
      blog_cover_image_error_control.invalid &&
      (blog_cover_image_error_control.touched ||
        blog_cover_image_error_control.dirty)
    ) {
      this.blog_cover_image_error_alert_msg = true;
      if (blog_cover_image_error_control.errors?.['required']) {
        this.blog_cover_image_error_message = 'You must add a cover image';
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

  validate_blog_description(blog_description_error_control: FormControl): void {
    this.blog_description_error_message = ' ';
    this.blog_description_error_alert_msg = false;
    if (
      blog_description_error_control.invalid &&
      (blog_description_error_control.touched ||
        blog_description_error_control.dirty)
    ) {
      this.blog_description_error_alert_msg = true;
      if (blog_description_error_control.errors?.['required']) {
        this.blog_description_error_message = 'You have to write something';
      }
      if (blog_description_error_control.errors?.['maxlength']) {
        this.blog_description_error_message =
          'Maximum length is ' + this.limit + ' characters';
      }
      if (blog_description_error_control.errors?.['minlength']) {
        this.blog_description_error_message =
          'Minimum length is ' + this.min_limit + 'characters';
      }
    }
  }

  submit(blog: any) {
    this.blogService.save_blogs(blog).subscribe((data) => {
      this.toastr.success('Successfully Posted!!', 'Blog');
    });

    let html_content = tinymce.activeEditor?.getContent();
    console.log(html_content);
    this.write_blogs_form.reset();
    tinymce.activeEditor?.setContent('Done');
    // make counter 0 after saving
    let description_counter: any | undefined;
    description_counter = document.getElementById('description_counter');
    let limit = this.limit;
    description_counter.textContent = 0 + '/' + limit;
  }
}
