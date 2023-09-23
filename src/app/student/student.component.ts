import { Component } from '@angular/core';
import {
  faBarsStaggered,
  faBars,
  faBlog,
  faPenToSquare,
  faEye,
  faSignOut,
  faGear, faUser, faReplyAll, faSquareShareNodes, faPersonChalkboard, faChalkboardUser, faDownload
} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})

export class StudentComponent {
  public faBarsStaggered = faBarsStaggered;
  public faBars = faBars;
  isCollapsed =false;
  open_inner_item =true;
  protected readonly faBlog = faBlog;
  protected readonly faPenToSquare = faPenToSquare;
  protected readonly faEye = faEye;
  protected readonly faSignOut = faSignOut;
  protected readonly faGear = faGear;
  protected readonly faUser = faUser;
  protected readonly faReplyAll = faReplyAll;
  protected readonly faSquareShareNodes = faSquareShareNodes;
  protected readonly faPersonChalkboard = faPersonChalkboard;
  protected readonly faChalkboardUser = faChalkboardUser;
  protected readonly faDownload = faDownload;
}
