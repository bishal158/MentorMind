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
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
})
export class StudentComponent {
  public faBarsStaggered = faBarsStaggered;
  isCollapsed = false;
  open_inner_item = true;
  protected readonly faEye = faEye;
  protected readonly faSignOut = faSignOut;
  protected readonly faUser = faUser;
  protected readonly faChalkboardUser = faChalkboardUser;
  protected readonly faDownload = faDownload;
  protected readonly faBookOpenReader = faBookOpenReader;
  protected readonly faBook = faBook;
}
