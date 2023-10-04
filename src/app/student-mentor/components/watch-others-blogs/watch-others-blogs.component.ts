import { Component } from '@angular/core';
import {
  faArrowRight,
  faComments,
  faFilter,
  faSearch,
  faStopwatch,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-watch-others-blogs',
  templateUrl: './watch-others-blogs.component.html',
  styleUrls: ['./watch-others-blogs.component.css'],
})
export class WatchOthersBlogsComponent {
  protected readonly faFilter = faFilter;
  protected readonly faSearch = faSearch;
  protected readonly faArrowRight = faArrowRight;
  protected readonly faStopwatch = faStopwatch;
  protected readonly faComments = faComments;
}
