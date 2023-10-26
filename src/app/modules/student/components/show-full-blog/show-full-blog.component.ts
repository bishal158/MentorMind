import { Component, OnInit } from '@angular/core';
import { faComments, faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import tinymce from 'tinymce';

@Component({
  selector: 'app-show-full-blog',
  templateUrl: './show-full-blog.component.html',
  styleUrls: ['./show-full-blog.component.css'],
})
export class ShowFullBlogComponent implements OnInit {
  name: string = 'Tasdid Alam';
  text_editor_error_message: string | undefined;
  comments = [
    {
      image: 'assets/images/top-mentors/mentor1.png',
      commenter: 'Mehedi Hasan Shawon',
      comment:
        'necessitatibus epicuri docendi auctor sale commodo potenti non patrioque deterruisset',
    },
    {
      image: 'assets/images/top-mentors/mentor2.jpg',
      commenter: 'Tasdid Alam',
      comment:
        'necessitatibus epicuri docendi auctor sale commodo potenti non patrioque deterruisset',
    },
    {
      image: 'assets/images/top-mentors/mentor3.jpg',
      commenter: 'Mafuj Ahmed Bishal',
      comment:
        'necessitatibus epicuri docendi auctor sale commodo potenti non patrioque deterruisset',
    },
    {
      image: 'assets/images/top-mentors/mentor1.png',
      commenter: 'Mafuj Ahmed Bishal',
      comment:
        'necessitatibus epicuri docendi auctor sale commodo potenti non patrioque deterruisset',
    },
  ];
  write_comments_form: FormGroup = this.formbuilder.group({
    text_editor: ['', [Validators.required]],
  });
  //text_editor
  text_editor_error_alert_msg: boolean | undefined;
  protected readonly faPenToSquare = faPenToSquare;
  protected readonly faComments = faComments;

  constructor(private formbuilder: FormBuilder) {}

  getControl(name: any): AbstractControl | null {
    return this.write_comments_form.get(name);
  }

  ngOnInit(): void {
    //text_editor
    const text_editor_error_control =
      this.write_comments_form.get('text_editor');
    text_editor_error_control?.valueChanges.subscribe((text_editor) => {
      this.validate_text_editor(text_editor_error_control as FormControl);
    });
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

  submit() {
    console.log(
      this.write_comments_form.value,
      this.write_comments_form.invalid,
    );
    let html_content = tinymce.activeEditor?.getContent();

    this.write_comments_form.reset();
    tinymce.activeEditor?.setContent('Done');
  }
}
