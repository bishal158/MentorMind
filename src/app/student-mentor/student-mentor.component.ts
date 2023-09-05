import { Component } from '@angular/core';

import {
  faBars, faBarsStaggered, faBlog, faEye,
  faGear,
  faPenToSquare, faReply, faReplyAll,
  faRightFromBracket,
  faShareFromSquare, faSignOut,
  faUser
} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-student-mentor',
  templateUrl: './student-mentor.component.html',
  styleUrls: ['./student-mentor.component.css'],

})
export class StudentMentorComponent {
  isCollapsed =false;
  open_inner_item =true;
  protected readonly faBars = faBars;
  protected readonly faShareFromSquare = faShareFromSquare;
  protected readonly faGear = faGear;
  protected readonly faPenToSquare = faPenToSquare;
  protected readonly faUser = faUser;
  protected readonly faRightFromBracket = faRightFromBracket;
  protected readonly faBarsStaggered = faBarsStaggered;
  protected readonly faSignOut = faSignOut;
  protected readonly faBlog = faBlog;
  protected readonly faReply = faReply;
  protected readonly faReplyAll = faReplyAll;
  protected readonly faEye = faEye;
}
