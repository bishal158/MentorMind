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
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
})
export class CoursesComponent {
  isCollapsed = false;
  open_inner_item = true;
  protected readonly faSignOut = faSignOut;
  protected readonly faEye = faEye;
  protected readonly faUser = faUser;
  protected readonly faBook = faBook;
  protected readonly faBarsStaggered = faBarsStaggered;
  protected readonly faChalkboardUser = faChalkboardUser;
  protected readonly faBookOpenReader = faBookOpenReader;
  protected readonly faDownload = faDownload;
}
