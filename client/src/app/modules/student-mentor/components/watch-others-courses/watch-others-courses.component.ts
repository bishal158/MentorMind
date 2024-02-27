import { Component } from '@angular/core';
import {
  faCircleCheck,
  faFilter,
  faSearch,
  faSpinner,
} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-watch-others-courses',
  templateUrl: './watch-others-courses.component.html',
  styleUrls: ['./watch-others-courses.component.css'],
})
export class WatchOthersCoursesComponent {
  course_status = 'In Progress';
  course_author = 'Mafuj Ahmed Bishal';
  protected readonly faSpinner = faSpinner;
  protected readonly faCircleCheck = faCircleCheck;
  protected readonly faFilter = faFilter;
  protected readonly faSearch = faSearch;
}
