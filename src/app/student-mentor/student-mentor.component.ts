import { Component } from '@angular/core';

import {
  faBars,
  faBarsStaggered,
  faBlog,
  faEnvelope,
  faEye,
  faGear,
  faHome,
  faPenToSquare,
  faPhone,
  faReply,
  faReplyAll,
  faRightFromBracket,
  faShareFromSquare,
  faSignOut,
  faSquareShareNodes,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import {
  faFacebook,
  faGoogle,
  faInstagram,
  faLinkedin,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-student-mentor',
  templateUrl: './student-mentor.component.html',
  styleUrls: ['./student-mentor.component.css'],
})
export class StudentMentorComponent {
  isCollapsed = false;
  open_inner_item = true;

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
  protected readonly faSquareShareNodes = faSquareShareNodes;
  protected readonly faFacebook = faFacebook;
  protected readonly faTwitter = faTwitter;
  protected readonly faInstagram = faInstagram;
  protected readonly faGoogle = faGoogle;
  protected readonly faLinkedin = faLinkedin;
  protected readonly faPhone = faPhone;
  protected readonly faEnvelope = faEnvelope;
  protected readonly faHome = faHome;
  protected readonly Animation = Animation;
}
