import { Component } from '@angular/core';
import {
  faBarsStaggered,
  faBook,
  faBookOpenReader,
  faChalkboardUser,
  faDownload,
  faEnvelope,
  faEye,
  faIdBadge,
  faMobile,
  faSignOut,
  faUser,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
})
export class CoursesComponent {
  protected readonly faBarsStaggered = faBarsStaggered;
  isCollapsed = false;
  open_inner_item = true;
  protected readonly faBook = faBook;
  protected readonly faBookOpenReader = faBookOpenReader;
  protected readonly faEye = faEye;
  protected readonly faChalkboardUser = faChalkboardUser;
  protected readonly faUser = faUser;
  protected readonly faDownload = faDownload;
  protected readonly faSignOut = faSignOut;
  protected readonly faMobile = faMobile;
  protected readonly faEnvelope = faEnvelope;
  protected readonly faIdBadge = faIdBadge;
}
