import { Component } from '@angular/core';
import {
  faArrowRight,
  faCircleCheck,
  faCirclePlus,
  faFilter,
  faPenToSquare,
  faPlus,
  faSearch,
  faSpinner,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-all-your-courses',
  templateUrl: './all-your-courses.component.html',
  styleUrls: ['./all-your-courses.component.css'],
})
export class AllYourCoursesComponent {
  // course_status_option: string | undefined;
  // printedOption: string | undefined;
  course_status = 'In Progress';
  course_author = 'Mafuj Ahmed Bishal';
  // print() {
  //   this.printedOption = this.course_status_option;
  // }
  protected readonly faSpinner = faSpinner;
  protected readonly faCircleCheck = faCircleCheck;
  protected readonly faFilter = faFilter;
  protected readonly faSearch = faSearch;
  protected readonly faCirclePlus = faCirclePlus;
  protected readonly faArrowRight = faArrowRight;
  protected readonly faPenToSquare = faPenToSquare;
}
