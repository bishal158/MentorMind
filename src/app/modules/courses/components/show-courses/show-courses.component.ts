import { Component } from '@angular/core';
import {
  faBarsStaggered,
  faBook,
  faBookOpenReader,
  faChalkboardUser,
  faDownload,
  faEye,
  faSignOut,
  faUser,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-show-courses',
  templateUrl: './show-courses.component.html',
  styleUrls: ['./show-courses.component.css'],
})
export class ShowCoursesComponent {
  protected readonly faBarsStaggered = faBarsStaggered;
  isCollapsed = false;
  open_inner_item = true;
  protected readonly faSignOut = faSignOut;
  protected readonly faDownload = faDownload;
  protected readonly faBookOpenReader = faBookOpenReader;
  protected readonly faChalkboardUser = faChalkboardUser;
  protected readonly faUser = faUser;
  protected readonly faEye = faEye;
  protected readonly faBook = faBook;
}
