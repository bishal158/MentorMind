import {Component, OnInit} from '@angular/core';
import tinymce from "tinymce";
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {faImage, faPenToSquare, faUser} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-write-blogs',
  templateUrl: './write-blogs.component.html',
  styleUrls: ['./write-blogs.component.css']
})
export class WriteBlogsComponent implements OnInit {
  protected readonly tinymce = tinymce;
  protected readonly faUser = faUser;
  protected readonly faImage = faImage;
  protected readonly faPenToSquare = faPenToSquare;
  blog_title_error_message: string | undefined;
  text_editor_error_message: string | undefined;
  blog_cover_image_error_message: string | undefined;
  constructor(private formbuilder: FormBuilder) {
  }

  blog_title_regex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;

  write_blogs_form: FormGroup = this.formbuilder.group({
      blog_title: ['', [Validators.required, Validators.maxLength(20), Validators.pattern(this.blog_title_regex)]],
      text_editor: ['', [Validators.required,]],
      blog_cover_image: ['', [Validators.required,]]
    },
  );

  getControl(name: any): AbstractControl | null {
    return this.write_blogs_form.get(name);
  }

  ngOnInit(): void {
    //text_editor
    const text_editor_error_control = this.write_blogs_form.get('text_editor');
    text_editor_error_control?.valueChanges.subscribe(text_editor => {
      this.validate_text_editor(text_editor_error_control as FormControl);
    })
    //blog_title
    const blog_title_error_control = this.write_blogs_form.get('blog_title');
    blog_title_error_control?.valueChanges.subscribe(blog_title => {
      this.validate_blog_title(blog_title_error_control as FormControl);
    })
    //blog_cover_image
    const blog_cover_image_error_control = this.write_blogs_form.get('blog_cover_image');
    blog_cover_image_error_control?.valueChanges.subscribe(blog_cover_image => {
      this.validate_blog_cover_image(blog_cover_image_error_control as FormControl);
    })
  }

  //blog_title
  blog_title_error_alert_msg: boolean | undefined;

  validate_blog_title(blog_title_error_control: FormControl): void {
    this.blog_title_error_message = ' ';
    this.blog_title_error_alert_msg = false;
    if (blog_title_error_control.invalid && (blog_title_error_control.touched || blog_title_error_control.dirty)) {
      this.blog_title_error_alert_msg = true;
      if (blog_title_error_control.errors?.['required']) {
        this.blog_title_error_message = 'Fullname is required';
      }
      if (blog_title_error_control.errors?.['maxlength']) {
        this.blog_title_error_message = 'Maximum length is 20';
      }
      if (blog_title_error_control.errors?.['pattern']) {
        this.blog_title_error_message = "Fullname pattern is not valid "
      }
    }
  }
  //text_editor
  blog_cover_image_error_alert_msg: boolean | undefined;
  validate_blog_cover_image(blog_cover_image_error_control: FormControl): void {
    this.blog_cover_image_error_message = ' ';
    this.blog_cover_image_error_alert_msg = false;
    if (blog_cover_image_error_control.invalid && (blog_cover_image_error_control.touched || blog_cover_image_error_control.dirty)) {
      this.blog_cover_image_error_alert_msg = true;
      if (blog_cover_image_error_control.errors?.['required']) {
        this.blog_cover_image_error_message = 'You must add a cover image';
      }
    }
  }
  //text_editor
  text_editor_error_alert_msg: boolean | undefined;
  validate_text_editor(text_editor_error_control: FormControl): void {
    this.text_editor_error_message = ' ';
    this.text_editor_error_alert_msg = false;
    if (text_editor_error_control.invalid && (text_editor_error_control.touched || text_editor_error_control.dirty)) {
      this.text_editor_error_alert_msg = true;
      if (text_editor_error_control.errors?.['required']) {
        this.text_editor_error_message = 'You have to write something';
      }
    }
  }
  submit(){
    console.log(this.write_blogs_form.value,this.write_blogs_form.invalid);
    let html_content = tinymce.activeEditor?.getContent();
    console.log(html_content);
    this.write_blogs_form.reset();
    tinymce.activeEditor?.setContent('Done');
  }
}
