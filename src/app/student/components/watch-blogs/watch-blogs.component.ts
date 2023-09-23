import {Component, OnInit} from '@angular/core';
import {faArrowRight, faFileSignature, faFilter, faSearch, faStopwatch} from "@fortawesome/free-solid-svg-icons";
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";


@Component({
  selector: 'app-watch-blogs',
  templateUrl: './watch-blogs.component.html',
  styleUrls: ['./watch-blogs.component.css']
})
export class WatchBlogsComponent implements OnInit {

  protected readonly faArrowRight = faArrowRight;
  protected readonly faFileSignature = faFileSignature;

  category_error_message:string|undefined;
  constructor(private formbuilder:FormBuilder){}
  blog_search_form:FormGroup = this.formbuilder.group({
    category: ['',[Validators.required,]],
    },
  );
  //getcontrol function for input validation
  getControl(name:any): AbstractControl | null{
    return this.blog_search_form.get(name);
  }

  ngOnInit(): void {
    const category_error_control = this.blog_search_form.get('category');
    category_error_control?.valueChanges.subscribe(title=>{
      this.validate_category(category_error_control as FormControl);
    })
  }
  //Category
  category__error_alert_msg:boolean | undefined;
  validate_category(category_error_control:FormControl): void {
    this.category_error_message = ' ';
    this.category__error_alert_msg = false;
    if (category_error_control.invalid && (category_error_control.touched || category_error_control.dirty)) {
      this.category__error_alert_msg = true;
      if(category_error_control.errors?.['required']){
        this.category_error_message= 'Title is required';
      }
    }
  }
  add(){
    console.log(this.blog_search_form.value,this.blog_search_form.invalid);
    this.blog_search_form.reset();
  }

  protected readonly faSearch = faSearch;
  protected readonly faFilter = faFilter;
  protected readonly faStopwatch = faStopwatch;
}
